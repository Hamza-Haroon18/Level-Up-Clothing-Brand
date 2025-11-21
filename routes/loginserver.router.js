const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { postlogin } = require("../controller/loginserver.controller.js");

const storage = multer.memoryStorage(); 
const upload = multer({ storage });

const checklogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login'); 
  }
};

router.get('/check-auth', (req, res) => {
  if (req.session && req.session.user) {
    res.json({ authenticated: true ,role: req.session.user.role});
  } else {
    res.json({ authenticated: false });
  }
});



router.get("/login", (req, res) => {
    res.render("login");
    // res.status(200).json({ message: "Login successful" });
});

router.post("/login", upload.none(), postlogin);

router.get("/logout",(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
})

module.exports = router;
