const User = require("../models/User.js");

// Render signup form
module.exports.signup_get = (req, res) => {
  res.render("signup");
};

// Handle user signup
module.exports.signup_post = async (req, res) => {
  const { phoneNumber, fullName, password, confirm_password, role } = req.body;
  console.log(req.body);

  if (password !== confirm_password) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    // Create a new user instance
    const user = new User(phoneNumber, fullName, password, role);

    // Save user to database
    const userId = await user.save();

    // Generate JWT token
    const token = await user.generateAuthToken();

    // Respond with user data and token
    res.status(201).json({ user: { phoneNumber, fullName }, token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Render login form
module.exports.login_get = (req, res) => {
  res.render("login");
};

// Handle user login
module.exports.login_post = async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    // Perform authentication logic (e.g., check credentials)
    const user = await User.findByCredentials(phoneNumber, password);
    const token = await user.generateAuthToken;

    // Redirect to dashboard or send success response
    res.render("dashboard", { user, token });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(400).json({ error: "Invalid credentials" }); // Send specific error response
  }
};
module.exports.dashboard_get = async (req, res) => {
  res.render("dashboard");
};
