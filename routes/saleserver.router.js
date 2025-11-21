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
} = require("../controller/saleserver.controller.js");

const {
  addProductmen,
  getshowproductmen,
  updateProductmen,
  deleteProductmen,
  getAllProductsmen
} = require("../controller/salemenserver.controller.js");

const {
  addProductkid,
  getshowproductkid,
  updateProductkid,
  deleteProductkid,
  getAllProductskid
} = require("../controller/salekidserver.controller.js");

const {
  addProductfrag,
  getshowproductfrag,
  updateProductfrag,
  deleteProductfrag,
  getAllProductsfrag
} = require("../controller/salefragserver.controller.js");

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

app.get("/admin/salewomen/add-product", (req, res) => {
  res.render("women/add-product");
});

app.post("/admin/salewomen/saleadd-product", upload.single("image"), addProduct);
app.get("/admin/saleshow-product/:id", getshowproduct);
app.get("/admin/salewomen/saleedit-product/:id", getshowproduct);
app.post("/admin/salewomen/saleedit-product/:id", upload.single("image"), updateProduct);
app.get("/admin/saledelete-product/:id", deleteProduct);
app.get("/admin/salewomen", getAllProducts);


app.get("/admin/salemen/salemenadd-product", (req, res) => {
  res.render("salemen/salemenadd-product");
});

app.post("/admin/salemen/salemenadd-product", upload.single("image"), addProductmen);
app.get("/admin/salemenshow-product/:id", getshowproductmen);
app.get("/admin/salemen/menedit-product/:id", getshowproductmen);
app.post("/admin/salemen/salemenedit-product/:id", upload.single("image"), updateProductmen);
app.get("/admin/salemendelete-product/:id", deleteProductmen);
app.get("/admin/salemen", getAllProductsmen);


app.get("/admin/salekid/salekidadd-product", (req, res) => {
  res.render("salekid/salekidadd-product");
});

app.post("/admin/salekid/salekidadd-product", upload.single("image"), addProductkid);
app.get("/admin/salekidshow-product/:id", getshowproductkid);
app.get("/admin/salekid/salekidedit-product/:id", getshowproductkid);
app.post("/admin/salekid/salekidedit-product/:id", upload.single("image"), updateProductkid);
app.get("/admin/salekiddelete-product/:id", deleteProductkid);
app.get("/admin/salekid", getAllProductskid);

app.get("/admin/salefrag/salefragadd-product", (req, res) => {
  res.render("salefrag/salefragadd-product");
});

app.post("/admin/salefrag/salefragadd-product", upload.single("image"), addProductfrag);
app.get("/admin/salefragshow-product/:id", getshowproductfrag);
app.get("/admin/salefrag/salefragedit-product/:id", getshowproductfrag);
app.post("/admin/salefrag/salefragedit-product/:id", upload.single("image"), updateProductfrag);
app.get("/admin/salefragdelete-product/:id", deleteProductfrag);
app.get("/admin/salefrag", getAllProductsfrag);

module.exports = app;
