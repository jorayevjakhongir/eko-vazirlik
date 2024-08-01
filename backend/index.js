const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
app.use(bodyParser.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "eco_deparment",
  password: "",
  database: "",
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
