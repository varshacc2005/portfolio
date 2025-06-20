// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Routes
const contactRoute = require('./models/Contact');
app.use('/api/contact', contactRoute);

// Import the required modules


// Define the /ping route


// Start the server



// Default route
app.get('/', (req, res) => {
  res.send('🟢 Contact API Running (No DB)');
});

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
