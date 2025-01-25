// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

// import postRoutes from './routes/post.js'
// import dotenv from 'dotenv'

// dotenv.config();
// const app = express();


// app.use(bodyParser.json({limit:"30mb",extended:true}));
// app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
// app.use(cors());

// app.use(express.json());


// app.use('/posts',postRoutes);
// const CONNECTION_URL = "mongodb+srv://arsalaankhan5:memories123@cluster0.kuoyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const PORT = process.env.PORT || 5000;


// // Middleware to parse JSON
// app.use(express.json());

// // MongoDB Connection
// mongoose
//   .connect('mongodb://localhost:27017/crudDB', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.error('Connection Error:', err));

// // Define Mongoose Schema for Existing Collection
// const itemSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     description: { type: String },
//     price: { type: Number, required: true },
//     createdAt: { type: Date, default: Date.now },
//   },
//   { collection: 'memo' } // Replace with your existing collection name
// );

// const Item = mongoose.model('Item', itemSchema);
// // Read All Items (GET)
// app.get('/api/items', async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.post('/api/items', async (req, res) => {
//   try {
//     const { name, description, price } = req.body;
//     const newItem = new Item({ name, description, price });
//     const savedItem = await newItem.save();
//     res.status(201).json(savedItem);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// mongoose.connect(CONNECTION_URL)
//   .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

  


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/post.js';

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());


app.use('/posts', postRoutes);


const CONNECTION_URL = process.env.MONGODB_URI; // MongoDB Atlas URL from .env
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error}`);
    process.exit(1);  // Exit the process with a failure status
  });


const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: 'memo' }
);

const Item = mongoose.model('Item', itemSchema);


app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a New Item (POST)
app.post('/api/items', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newItem = new Item({ name, description, price });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
