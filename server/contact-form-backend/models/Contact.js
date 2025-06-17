// routes/contact.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter again (in case you don't share instance)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const mailOptions = {
      from: `"Your Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Message from your Portfolio Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('✅ Email sent');
    } catch (emailError) {
      console.error('❌ Email failed:', emailError);
    }

    res.status(200).json({ message: 'Message received! We will get back to you soon.' });
  } catch (err) {
    console.error('❌ Server error:', err);
    res.status(500).json({ error: 'Failed to send message. Try again later.' });
  }
});

module.exports = router;
