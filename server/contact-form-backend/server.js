const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');


const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // 1. Import Nodemailer

const Contact = require('./models/Contact');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection


// 2. Create Nodemailer Transporter
// This transporter object is what will actually send the emails.
// It's configured to use Gmail with the credentials from your .env file.
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'hotmail', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address from .env
    pass: process.env.EMAIL_PASS, // Your App Password from .env
  },
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save(); // First, save the contact to the database

    // 3. Define Email Options and Send Email
    const mailOptions = {
      from: `"Your Website" <${process.env.EMAIL_USER}>`, // Sender address
      to: process.env.EMAIL_RECEIVER, // Receiver (your) address from .env
      subject: `New Contact Form Submission from ${name}`, // Subject line
      html: `
        <h2>New Message from your Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send the email
    // We wrap this in a try-catch in case the DB save succeeds but email fails.
    // This way, the user still gets a success message.
    try {
      await transporter.sendMail(mailOptions);
      console.log('✅ Notification email sent successfully.');
    } catch (emailError) {
      console.error('❌ Error sending notification email:', emailError);
      // We don't want to send an error to the user, just log it for ourselves.
    }

    res.status(200).json({ message: 'Message received! We will get back to you soon.' });
  } catch (err) {
    console.error('❌ Error in /api/contact route:', err);
    res.status(500).json({ error: 'Failed to send message. Try again later.' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('🟢 Contact API Running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));