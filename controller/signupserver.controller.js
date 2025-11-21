const Product = require("../models/signup.model.js");
const path = require("path");
const fs = require('fs');
const bcrypt = require("bcryptjs")
const postsignup = async (req, res) => {
    try {
        const {
            name,
            gender,
            email,
            password,
            confirmpassword,
            mobile
        } = req.body;
        console.log("Received body:", req.body);
        const role = (email === "hamzaharoon266@gmail.com") ? "admin" : "user";
        if (password !== confirmpassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const existingUser = await Product.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already exists" });
        }
        const hashpassword = await bcrypt.hash(password, 8)
        const newProduct = new Product({
            name,
            gender,
            email,
            password: hashpassword,
            // confirmpassword: hashpassword,
            mobile,
            role
        });

        await newProduct.save();
        res.status(200).json({ message: "User Account created successfully" });
    } 
    catch (err) {
        console.error("Error adding account:", err);
        res.status(500).json({ error: "Failed to create account" });
    }
};
module.exports = { postsignup };
