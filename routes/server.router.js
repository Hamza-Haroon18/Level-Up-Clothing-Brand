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
} = require("../controller/server.controller.js");

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

app.get("/admin/women/add-product", (req, res) => {
  res.render("women/add-product");
});

app.post("/admin/women/add-product", upload.single("image"), addProduct);
app.get("/admin/show-product/:id", getshowproduct);
app.get("/admin/women/edit-product/:id", getshowproduct);
app.post("/admin/women/edit-product/:id", upload.single("image"), updateProduct);
// app.put("/admin/women/edit-product/:id", updateProduct);
app.get("/admin/delete-product/:id", deleteProduct);
app.get("/admin/women", getAllProducts);

module.exports = app;
