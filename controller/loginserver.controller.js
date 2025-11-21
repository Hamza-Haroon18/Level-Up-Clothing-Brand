const Product = require("../models/signup.model.js");
const bcrypt = require("bcryptjs");

const postlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received body:", req.body);

    const existingUser = await Product.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }
    req.session.user=existingUser;
    res.status(200).json({ email: existingUser.email,role: existingUser.role, message: "User login successful" });

  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ error: "Failed to login" });
  }
};

module.exports = { postlogin };
