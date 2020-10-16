const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

router.get('/', accountController.handle);
router.get('/:id', accountController.getAccountById);
router.get('/all', accountController.getAllAccounts);
router.get('/authorization', accountController.authorizeAccountApp);

router.post('/', accountController.save);

module.exports = router;