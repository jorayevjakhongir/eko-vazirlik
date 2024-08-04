const express = require("express");
const session = require("express-session");
const cookie = require("cookie-parser");
const dotenv = require("dotenv");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const http = require("http");
const db = require("./models/db_controller.js");
const authRotes = require("./routes/authRoutes.js");
const app = express();

app.set("view engine", "ejs");

dotenv.config();
// Middleware for parsing JSON and URL-encoded bodies
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookie());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => res.render("home"));
app.use(authRotes);
