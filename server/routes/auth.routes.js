const express = require("express");
const router = express.Router();

// Import the controller
const authController = require("../controllers/auth.controllers.js");
const upload = require("../middleware/upload");
// Define the route for creating a doctor
router.post("/doctors", authController.registerDoctor);
router.post("/clients", authController.registerClient);
router.post("/admins", authController.registerAdmin);
router.post("/login", authController.login);
router.post("/verify", authController.verifyToken);
router.get("/profile", authController.getProfile);
router.post("/send-otp", authController.sendOtp);
router.get("/users/with-roles", authController.getUsersWithRoles);
router.post("/verify-otp", authController.verifyOtp);
router.put("/change-password", authController.changePassword);
router.put(
	"/change-profile-picture",
	upload.single("image"),
	authController.changeProfilePicture
);
router.post("/send-forgot-otp", authController.sendForgotOtp);
router.post("/verify-forgot-otp", authController.verifyForgotOtp);
router.put("/reset-password", authController.resetPassword);
module.exports = router;
