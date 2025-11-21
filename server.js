const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require("path");
const multer = require("multer");
const session=require("express-session")
const bcrypt=require("bcryptjs")


const app = express();
const connectDB = require("./config/database.js");
const server_routes = require("./routes/server.router.js");
const menserver_routes = require("./routes/menserver.router.js");
const kidserver_routes = require("./routes/kidserver.router.js");
const fragserver_routes = require("./routes/fragserver.router.js");
const saleserver_routes = require("./routes/saleserver.router.js");
const cosmeticsserver_routes = require("./routes/cosmeticsserver.router.js");
const skincaresserver_routes = require("./routes/skincaresserver.router.js");
const signup_routes = require("./routes/signupserver.router.js");
const login_routes = require("./routes/loginserver.router.js");
const checkout_routes = require("./routes/checkoutserver.router.js");
const search_route = require("./routes/search.router.js");
const replyemail_route = require("./utils/replyEmail.js");
const sendemail_route = require("./utils/sendEmail.js");
// Database Connection
connectDB();

// Middleware
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(session({
  secret:'secretpassword',
  resave:false,
  saveUninitialized:false,
  cookie:{maxAge:1000*60*60*24}
}))

app.set('view engine', 'ejs');

// Routes
app.use(server_routes);
app.use(menserver_routes);
app.use(kidserver_routes);
app.use(fragserver_routes);
app.use(saleserver_routes);
app.use(cosmeticsserver_routes);
app.use(skincaresserver_routes);
app.use(signup_routes);
app.use(login_routes);
app.use(checkout_routes);
app.use(search_route);
app.use(replyemail_route);
app.use(sendemail_route);

app.use((error,req,res,next)=>
{
  if(error instanceof multer.MulterError){
    return res.status(400).send(`Image error : ${error.message} : ${error.code}`)
  }else if(error){
    return res.status(500).send(`Something went wrong : ${error.message}`)
  }
  next()
})
// Start Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
