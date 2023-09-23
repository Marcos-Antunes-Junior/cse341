const express = require('express');

const contactsController = require('../controllers/contactsController');

const router = express.Router();

router.get('/', contactsController.getData);

router.get('/:id', contactsController.getDataById);

module.exports = router;