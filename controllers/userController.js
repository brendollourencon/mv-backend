const userService = require('../services/userService');

class UserController {

  constructor() {
    this.service = new userService();
  }

  getAllUsers = async(req, res) => {
    try {
      const {offset, limit} = req.body;
      const users = await this.service.getAllUsers(offset, limit);

      res.status(200).send({
        errors: false,
        data: users
      });
    } catch(e) {
      res.status(400).send({
        errors: e.message,
        data: []
      });
    }
  }

  createNewUser = async(req, res) => {
    try {
      const {name, email, password} = req.body;
      const user = await this.service.createNewUser(name, email, password);

      res.status(200).send({
        errors: false,
        data: user
      });
    } catch(e) {
      res.status(400).send({
        errors: e,
        data: []
      });
    }
  }


  createUserTestMl = async(req, res) => {
    try {
      const {idUser, idAccount} = req.body;
      const userTest = await this.service.createUserTest(idUser, idAccount);

      res.status(200).send({
        errors: false,
        data: userTest
      });
    } catch(e) {
      res.status(400).send({
        errors: e,
        data: []
      });
    }
  }
}

module.exports = UserController;