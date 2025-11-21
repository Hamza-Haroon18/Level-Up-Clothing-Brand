const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    maincategory: {
      type: String,
      required: true
    },
    productname: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    productType: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    skinType: {
      type: String,
      required: true,
    },
    concern: {
      type: String,
      required: true,
    },
    size: {
      type: [String], 
      required: true,
    },
    image: {
      type: String, 
      required: true,
    },
    createdAt: {
    type: Date,
    default: Date.now,
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("skincaresProduct", productSchema);
