const express = require("express");
const session = require("express-session");
const cookie = require("cookie-parser");
const path = require("path");
const ejs = require("ejs");
const multer = require("multer");
const async = require("async");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const expressValidator = require("express-validator");
const sweetalert = require("sweetalert2");
const bodyParser = require("body-parser");
const http = require("http");
const db = require("./models/db_controller.js");

const app = express();
const signup = require("./controllers/signup.js");
const home = require("./controllers/home.js");
const login = require("./controllers/login.js");
const verify = require("./controllers/verify.js");
const reset = require("./controllers/reset_controller.js");
var landing = require("./controllers/landing.js");
app.set("view engine", "ejs");

const server = http.createServer(app);
// Middleware for parsing JSON and URL-encoded bodies
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookie());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use("/login", login);
app.use("/home", home);
app.use("/", landing);
app.use("/signup", signup);
app.use("/verify", verify);
app.use("/reset", reset);
