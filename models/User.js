const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../db/db.js"); // Assuming db.js exports a MySQL connection pool
const dotenv = require("dotenv").config();
class User {
  constructor(phoneNumber, fullName, password, role) {
    this.phoneNumber = phoneNumber;
    this.fullName = fullName;
    this.password = password;
    this.role = role;
  }

  async save() {
    const hashedPassword = await bcrypt.hash(this.password, 10); // Hash this.password before saving

    return new Promise((resolve, reject) => {
      db.execute(
        "INSERT INTO users (phone_number, full_name, password, role) VALUES (?, ?, ?, ?)",
        [this.phoneNumber, this.fullName, hashedPassword, this.role],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results.insertId);
          }
        }
      );
    });
  }

  static async getUserByPhoneNumber(phoneNumber) {
    return new Promise((resolve, reject) => {
      db.execute(
        "SELECT * FROM users WHERE phone_number = ?",
        [phoneNumber],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results[0]);
          }
        }
      );
    });
  }

  async generateAuthToken() {
    const token = jwt.sign({ id: this.id }, process.env.SECRET_JWT, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });
    return token;
  }

  static async findByCredentials(phoneNumber, password) {
    const user = await User.getUserByPhoneNumber(phoneNumber);

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new Error("Invalid password");
    }

    return user;
  }
}

module.exports = User;
