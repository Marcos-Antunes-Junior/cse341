const express = require('express');
const router = express.Router();
const baseController = require("../controllers/baseController")


router.use('/', require('./swagger'));
router.use('/contacts', require('./contactsRoute'));


// Index Route
router.get("/", baseController.buildHome)

module.exports = router;