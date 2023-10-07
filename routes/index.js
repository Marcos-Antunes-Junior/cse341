const express = require('express');
const router = express.Router();
const baseController = require("../controllers/baseController")
const contacts = require('./contactsRoute');

router.use('/', require('./swagger'));
router.use('/contacts', contacts);


// Index Route
//router.get("/", baseController.buildHome)

module.exports = router;