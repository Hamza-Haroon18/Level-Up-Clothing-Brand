const express = require("express");
const app = express.Router();
const path = require("path");
const multer = require("multer");
const {
  addProduct,
  getshowproduct,
  updateProduct,
  deleteProduct,
  getAllProducts
} = require("../controller/kidserver.controller.js");

// Upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});
const fileFilter=(req,file,cb)=>{
  if(file.mimetype.startsWith('image/')){
    cb(null,true)
  }else{
    cb(new Error('Only Images are allowed'),false)
  }
}
const upload = multer({ storage: storage,fileFilter:fileFilter });

app.get("/admin/kid/kidadd-product", (req, res) => {
  res.render("kid/kidadd-product");
});

app.post("/admin/kid/kidadd-product", upload.single("image"), addProduct);
app.get("/admin/kidshow-product/:id", getshowproduct);
app.get("/admin/kid/kidedit-product/:id", getshowproduct);
app.post("/admin/kid/kidedit-product/:id", upload.single("image"), updateProduct);
app.get("/admin/kiddelete-product/:id", deleteProduct);
app.get("/admin/kid", getAllProducts);

module.exports = app;
