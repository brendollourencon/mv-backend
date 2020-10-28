const userModel = require('../models/userModel');
const userTestModel = require('../models/userTestModel');

class UserRepository {

  constructor() {
    this.model = userModel;
    this.modelUserTest = userTestModel
  }

  getAllUsers = async(offset, limit, order) => {
    return await this.model.findAll({
      order: order,
      offset: offset,
      limit: limit
    });
  }

  createNewUser = async(user) => {
    return this.model.create(user);
  }

  getUSerByEmail = async(email) => {
    return await this.model.findOne({
      where: {
        email: email
      }
    });
  }

  createUserTest = async(userTest) => {
    return this.modelUserTest.create(userTest);
  }

  findAllUserTest = async() => {
    return this.modelUserTest.findAll();
  }

}

module.exports = UserRepository;