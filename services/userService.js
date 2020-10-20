const userRepository = require('../repositories/userRepository');
const Helper = require('../helpers/helper');

class UserService {

  constructor() {
    this.repository = new userRepository();
  }

  getAllUsers = async(offset, limit) => {
    offset = offset ? offset : 0;
    limit = limit ? limit : 10;
    const order = [['id', 'ASC']];
    return await this.repository.getAllUsers(offset, limit, order);
  }

  createNewUser = async(name, email, password, status = true) => {
    if(!email || !password) {
      throw 'Email e/ou senha não foram passados corretamente.';
    }
    password = await Helper.generatePassword(password);

    let exist = await this.repository.getUSerByEmail(email);

    if(exist) {
      throw 'Já existe um usuário cadastrado com este email.';
    }

    await this.repository.createNewUser({name, email, password, status});

    return await this.repository.getUSerByEmail(email);
  }
}

module.exports = UserService;