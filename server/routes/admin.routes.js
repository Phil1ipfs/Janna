const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers.js");

// Client approval routes - multiple paths for compatibility
router.put("/approve/:user_id", adminController.approveClient);
router.put("/approve-client/:user_id", adminController.approveClient);
router.put("/clients/:user_id/approve", adminController.approveClient);

router.put("/profile", adminController.updateAdminProfile);
router.get("/profile", adminController.getAdminProfile);

module.exports = router;
