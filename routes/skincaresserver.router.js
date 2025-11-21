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
} = require("../controller/skincaresserver.controller.js");

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

app.get("/admin/skincares/skincaresadd-product", (req, res) => {
  res.render("skincares/skincaresadd-product");
});

app.post("/admin/skincares/skincaresadd-product", upload.single("image"), addProduct);
app.get("/admin/skincaresshow-product/:id", getshowproduct);
app.get("/admin/skincares/skincaresedit-product/:id", getshowproduct);
app.post("/admin/skincares/skincaresedit-product/:id", upload.single("image"), updateProduct);
app.get("/admin/skincaresdelete-product/:id", deleteProduct);
app.get("/admin/skincares", getAllProducts);

module.exports = app;
