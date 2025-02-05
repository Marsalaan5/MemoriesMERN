// const express = require('express');
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const router = express.Router();



// //signup route

// router.post('/signup',async (req,res)=>{
//     const {name,email,password} = req.body;

//     try {
//         const existingUser = await User.findOne({email});
//         if(existingUser){
//             return res.status(400).json({message:'User Already Exists'})
//     }

//     const newUser = new User({name,email,password});
//     await newUser.save();

//     const token = jwt.sign({userId:newUser._id},'your_jwt_secret', { expiresIn: '1h' });
//     res.status(201).json({token,userId:newUser._id});
// }catch(error){
//     res.status(500).json({message:'Server error'});
// }
// });

// //Login route

// router.post('./login',async(req,res)=>{
//     const {email,password} =req.body;

//     try{
//         const user = await User.findOne({email});
//         if(!user){
//             return res.status(400).json({message:'User not found'});
//         }
//         const isMatch = await bcrypt.compare(password,user.password);
//         if(!isMatch){
//             return res.status(400).json({message:'Invalid Credentials'});
//         }
//         const token = jwt.sign({userId:user._id},'your_jwt_secret',{expiresIn:'1h'});
//         res.json({token,userId:user._id});
//     }catch(err){
//         res.status(500).json({message:'Server error'});
//     }
// });

// module.exports = router;

import express from 'express';
import bcrypt from 'bcryptjs'; // For password hashing
import jwt from 'jsonwebtoken'; // For creating JWTs
import User from '../models/User.js'; // Assuming you have a User model

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { name,email, password} = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword,name });
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ result: newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password matches
    const hashedPassword = await bcrypt.hash(password, 12);
    // const isPasswordCorrect = await password.comparePassword(hashedPassword);
    if(!hashedPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ result: user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Forgot password route (optional)
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
   
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

   
    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

   
    res.status(200).json({ message: 'Password reset link sent', resetToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});


router.post('/reset-password', async (req, res) => {
  const { resetToken, newPassword } = req.body;

  try {
    
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);

    // Find the user by ID
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hash the new password and update it
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }

  router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
  // Setup the email transporter using Gmail SMTP (you can change this as per your email service)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASS,
    },
  });
  
     // Prepare email content
     const mailOptions = {
      from: email, // sender address
      to: 'recipient-email@example.com', // receiver's email
      subject: `New contact form submission from ${name}`,
      text: `You have a new contact form submission:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
    };
  
    // Send the email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send('Error sending message.');
      }
      console.log('Message sent: ' + info.response);
      res.status(200).send('Message sent successfully!');
    });
  });
  
});

export default router;