

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'
import nodemailer from 'nodemailer';

import postRoutes from './routes/posts.js';

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());


app.use('/posts', postRoutes);
// app.use('/about', postRoutes);
app.use('/auth', authRoutes);


const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error}`);

  });

