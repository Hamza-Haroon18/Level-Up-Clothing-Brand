// routes/adminToUser.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const AdminsEmail = require("../models/replyEmail.model.js"); // admin → user
require("dotenv").config();

const sendReplyToUser = async (userEmail, subject, message) => {
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
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject,
    text: message,
  });
};
router.get("/admin-replies", async (req, res) => {
  try {
    // const replies = await AdminsEmail.find().sort({ createdAt: -1 });
    // res.json(replies);
    const userEmail = req.query.email; // get email from query param
    if (!userEmail) return res.status(400).json({ message: "User email required" });
    const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const total = await AdminsEmail.countDocuments({ email: userEmail });
        const totalproduct = await AdminsEmail.find({ email: userEmail }).skip(skip).limit(limit).sort({ createdAt: -1 });
        const totalPage = Math.ceil(total / limit);

        res.json({
            total,
            page,
            limit,
            totalPage,
            totalproduct
        });
  } catch (error) {
    console.error("Fetch replies error:", error);
    res.status(500).json({ message: "❌ Failed to fetch replies", error: error.message });
  }
});

router.post("/reply-email", async (req, res) => {
  const { email, subject, message } = req.body;
  try {
    await sendReplyToUser(email, subject, message);
    const newReply = new AdminsEmail({ email, subject, message });
    await newReply.save();
    res.status(200).json({ message: "✅ Reply sent to user" });
  } catch (error) {
    console.error("Reply email error:", error);
    res.status(500).json({ message: "❌ Reply failed", error: error.message });
  }
});

module.exports = router;
