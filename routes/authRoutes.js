const { Router } = require("express");
const authController = require("../controllers/authController.js");
const router = Router();
const authenticateToken = require("../middleware/authenticateToken");

router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/dashboard", authController.dashboard_get);

module.exports = router;
