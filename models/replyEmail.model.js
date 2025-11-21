const mongoose=require("mongoose")  
const productSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

const items=mongoose.model("AdminsEmail",productSchema)  

module.exports=items