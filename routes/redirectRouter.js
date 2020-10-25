const express = require('express');
const router = express.Router();

const classAccountController = require('../controllers/accountController');
const accountController = new classAccountController();

router.get('/', accountController.createNewAccount);

module.exports = router;