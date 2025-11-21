// routes/userToAdmin.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const UsersEmail = require("../models/sendEmail.model.js");
require("dotenv").config();

const sendEmailToAdmin = async (fromEmail, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter.sendMail({
    from: `"${fromEmail}" <${process.env.EMAIL_USER}>`,
    replyTo: fromEmail,
    to: process.env.EMAIL_USER,
    subject,
    text: message,
  });

};

//User sends message to Admin
router.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body;
  try {
    await sendEmailToAdmin(email, subject, message);
    const newEmail = new UsersEmail({ email, subject, message });
    await newEmail.save();
    res.status(200).json({ message: "✅ Email sent to Admin" });
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to send email", error: error.message });
  }
});

//Admin fetches all user messages
router.get("/usermessages", async (req, res) => {
  try {
    // const messages = await UsersEmail.find().sort({ createdAt: -1 });
    // res.json(messages);
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const total = await UsersEmail.countDocuments();
    const totalproduct = await UsersEmail.find().skip(skip).limit(limit).sort({ createdAt: -1 });
    const totalPage = Math.ceil(total / limit);

    res.json({
      total,
      page,
      limit,
      totalPage,
      totalproduct
    });
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to fetch messages" });
  }
});

module.exports = router;
