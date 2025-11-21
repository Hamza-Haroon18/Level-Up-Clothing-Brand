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
} = require("../controller/menserver.controller.js");

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

app.get("/admin/men/menadd-product", (req, res) => {
  res.render("/men/menadd-product");
});

app.post("/admin/men/menadd-product", upload.single("image"), addProduct);
app.get("/admin/menshow-product/:id", getshowproduct);
app.get("/admin/men/menedit-product/:id", getshowproduct);
app.post("/admin/men/menedit-product/:id", upload.single("image"), updateProduct);
app.get("/admin/mendelete-product/:id", deleteProduct);
app.get("/admin/men", getAllProducts);

module.exports = app;
