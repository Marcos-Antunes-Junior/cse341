const express = require('express');
const router = express.Router();
const baseController = require("../controllers/baseController")

// Index Route
router.get("/", baseController.buildHome)

module.exports = router;