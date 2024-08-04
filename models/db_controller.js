// const mysql = require("mysql");
// const express = require("express");
// const router = express.Router();
// const bodyParser = require("body-parser");

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "eco_department",
// });

// con.connect(function (err) {
//   if (err) {
//     throw err;
//   } else {
//     console.log("you are connected to database");
//   }
// });

// module.exports.signup = function (username, email, password, status, callback) {
//   var query =
//     "INSERT INTO `users`(`username`,`email`,`password`,`email_status`) VALUES ('" +
//     username +
//     "','" +
//     email +
//     "','" +
//     password +
//     "','" +
//     status +
//     "')";
//   con.query(query, callback);
// };
