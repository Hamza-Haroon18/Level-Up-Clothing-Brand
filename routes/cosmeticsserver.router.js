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
} = require("../controller/cosmeticsserver.controller.js");

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

app.get("/admin/cosmetics/cosmeticsadd-product", (req, res) => {
  res.render("cosmetics/cosmeticsadd-product");
});

app.post("/admin/cosmetics/cosmeticsadd-product", upload.single("image"), addProduct);
app.get("/admin/cosmeticsshow-product/:id", getshowproduct);
app.get("/admin/cosmetics/cosmeticsedit-product/:id", getshowproduct);
app.post("/admin/cosmetics/cosmeticsedit-product/:id", upload.single("image"), updateProduct);
app.get("/admin/cosmeticsdelete-product/:id", deleteProduct);
app.get("/admin/cosmetics", getAllProducts);

module.exports = app;
