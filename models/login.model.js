const mongoose=require("mongoose")  
const productSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
//   confirmpassword: {
//     type: String,
//     required: true,
//   },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

const items=mongoose.model("Login_users",productSchema)  

module.exports=items