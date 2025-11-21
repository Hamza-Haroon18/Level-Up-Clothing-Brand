const Product = require("../models/checkout.model.js");
const path = require("path");
const fs = require('fs');
const bcrypt = require("bcryptjs")
const postcheckout = async (req, res) => {
    console.log("REQ BODY:", req.body);
    try {
        const {
            name,
            email,
            mobile,
            alternateMobile,
            address,
            landmark,
            city,
            country,
            postalCode,
            province,
            message,
            totalAmount,
            delivery,
            cart
        } = req.body;
        console.log("Received body:", req.body);

        let cartItems = [];

        try {
            cartItems = typeof cart === 'string' ? JSON.parse(cart) : cart;
        } catch (err) {
            console.error("Invalid cart format:", err);
            return res.status(400).json({ error: "Invalid cart format" });
        }

        const formattedCart = cartItems.map(item => ({
            productId: item.productId,
            size: item.size,
            quantity: item.quantity,
            price: item.price,
            image:item.image
        }));
        const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        const newProduct = new Product({
            orderNumber,
            name,
            email,
            mobile,
            alternateMobile,
            address,
            landmark,
            city,
            country,
            postalCode,
            province,
            message,
            totalAmount,
            delivery,
            cart: formattedCart,
            status: "Pending"
        });

        await newProduct.save();
        res.status(200).json({ message: "User Checkout Information added successfully" ,orderNumber  });
    }
    catch (err) {
        console.error("Error adding information:", err);
        res.status(500).json({ error: "Failed to add information" });
    }
};

const trackorder= async (req, res) => {
  try {
    const { orderNumber, email, mobile } = req.body;

    const order = await Product.findOne({
      orderNumber,
      email,
      mobile
    });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(order);
  } catch (err) {
    console.error("Track order error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
const orderstatus= async (req, res) => {
  try {
    const { status } = req.body;
    const updatedOrder = await Product.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json({
      message: "Order status updated successfully",
      order: updatedOrder
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
};

module.exports = { postcheckout,trackorder,orderstatus };
