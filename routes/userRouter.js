const express = require('express');
const router = express.Router();

const classUserController = require('../controllers/userController');
const userController = new classUserController();

router.post('/', userController.createNewUser);
router.get('/all', userController.getAllUsers);
router.get('/user-test', userController.createUserTestMl);

module.exports = router;