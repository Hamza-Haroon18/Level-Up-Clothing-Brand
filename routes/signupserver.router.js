// const express = require("express");
// const app = express.Router();
// const path = require("path");
// const {
//   postsignup
// } = require("../controller/signupserver.controller.js");

// app.get("/signup", (req,res)=>{
//     res.render("signup")
// });
// app.post("/signup", postsignup);

// module.exports = app;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { postsignup } = require("../controller/signupserver.controller.js");

const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.get("/signup", (req, res) => {
    res.render("signup");
    res.status(200).json({ message: "Signup successful" });
});

router.post("/signup", upload.none(), postsignup);

module.exports = router;
