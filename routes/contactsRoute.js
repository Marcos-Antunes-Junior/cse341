const express = require('express');

const contactsController = require('../controllers/contactsController');

const router = express.Router();

router.get('/', contactsController.getData);

router.get('/:id', contactsController.getDataById);

router.post('/', contactsController.createNewContact)

router.put('/:id', contactsController.updateContact)

router.delete('/:id', contactsController.deleteContact)


module.exports = router;