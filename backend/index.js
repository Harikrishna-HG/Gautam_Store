const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');
const Purchase = require('./models/Purchase'); 


// Create Express App
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());  
app.use(bodyParser.json());


// MongoDB URL
const mongodb_url = "mongodb+srv://godam:godam123@cluster0.5n1hp.mongodb.net/godam_db?retryWrites=true&w=majority&appName=Cluster0";

// Connection to MongoDB 
mongoose.connect(mongodb_url)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;
  
    try {
      const user = await User.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
      });
  
      if (!user) {
        return res.status(400).json({ error: 'User does not exist' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Incorrect password' });
      }
  
      res.json({ message: `Welcome, ${user.username}!` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error, please try again later' });
    }
  });
  
  

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Please fill out all fields' });
    }
  
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword
      });
  
      await newUser.save();
  
      // Send success response
      res.status(201).json({ message: 'User created successfully' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error signing up' });
    }
  });


  app.post('/buy', async (req, res) => {
    const { productId, title } = req.body;

    if (!productId || !title) {
        return res.status(400).json({ error: 'Product ID and title are required.' });
    }

    try {
        // Create a new purchase record
        const newPurchase = new Purchase({ productId, title });
        await newPurchase.save();

        // Respond with a success message
        res.status(200).json({ message: `Purchase successful for ${title}.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error saving purchase. Please try again later.' });
    }
});
  
// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
