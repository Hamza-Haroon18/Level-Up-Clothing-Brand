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
} = require("../controller/fragserver.controller.js");

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

app.get("/admin/frag/fragadd-product", (req, res) => {
  res.render("frag/fragadd-product");
});

app.post("/admin/frag/fragadd-product", upload.single("image"), addProduct);
app.get("/admin/fragshow-product/:id", getshowproduct);
app.get("/admin/frag/fragedit-product/:id", getshowproduct);
app.post("/admin/frag/fragedit-product/:id", upload.single("image"), updateProduct);
app.get("/admin/fragdelete-product/:id", deleteProduct);
app.get("/admin/frag", getAllProducts);

module.exports = app;
