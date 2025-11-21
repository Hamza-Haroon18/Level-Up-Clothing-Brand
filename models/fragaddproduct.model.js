const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  maincategory:{
    type: String,
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  fragranceType: {
    type: String,
    required: true,
  },
  occasion: {
    type: String,
    required: true,
  },
  longevity: {
    type: String,
    required: true,
  },
  volume: {
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
  }
});

const FragranceProduct = mongoose.model("FragranceProduct", productSchema);

module.exports = FragranceProduct;
