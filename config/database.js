const mongoose = require("mongoose")
const connectDB=()=>{
mongoose.connect('mongodb://127.0.0.1:27017/clothing-db')
  .then(() => console.log("Database Connected"))
}

module.exports = connectDB;