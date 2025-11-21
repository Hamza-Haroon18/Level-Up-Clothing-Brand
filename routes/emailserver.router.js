const express = require("express");
const router = express.Router();
const sendReplyEmail = require("../utils/sendEmail");

router.post("/reply-email", async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    const info = await sendReplyEmail(email, subject, message);
    res.status(200).json({ message: "✅ Reply sent to user", info });
  } catch (error) {
    res.status(500).json({ message: "❌ Reply failed", error: error.message });
  }
});

module.exports = router;
