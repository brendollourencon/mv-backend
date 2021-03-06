const express = require('express');
const router = express.Router();

const classAccountController = require('../controllers/accountController');
const accountController = new classAccountController();

router.post('/', accountController.createNewAccount);

router.post('/refresh-token', accountController.refreshTokenAccount)

module.exports = router;