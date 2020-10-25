const userModel = require('../models/userModel');

class UserRepository {

  constructor() {
    this.model = userModel;
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
}

module.exports = UserRepository;