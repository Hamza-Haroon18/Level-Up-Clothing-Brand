const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Product = require("../models/checkout.model.js");
const { postcheckout, trackorder, orderstatus } = require("../controller/checkoutserver.controller.js");

const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.get("/cart/checkout", async (req, res) => {
    try {
        const page =parseInt(req.query.page)||1;
        const limit =parseInt(req.query.limit)||5;
        const skip=(page-1)*limit;
        const total = await Product.countDocuments();
        const orders = await Product.find().skip(skip).limit(limit).sort({ createdAt: -1 });
        const totalPage=Math.ceil(total/limit);
        res.status(200).json({
  orders,
  page,
  limit,
  total,
  totalPage
});

    } catch (error) {
        console.error("Error fetching order history:", error);
        res.status(500).json({ error: "Failed to fetch order history" });
    }
});

router.post("/cart/checkout", upload.none(), postcheckout);
router.post("/track",trackorder)
router.put("/track/status/:id",orderstatus)
module.exports = router;