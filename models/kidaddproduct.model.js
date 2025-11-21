const mongoose=require("mongoose")  
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
  fabric: {
    type: String,
    required: true,
  },
  styling: {
    type: String,
    required: true,
  },
  wear: {
    type: String,
    required: true,
  },
  trouser: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  productType: {
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
  }
})

const items=mongoose.model("Kidsproducts",productSchema)  

module.exports=items