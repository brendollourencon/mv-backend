const userRepository = require('../repositories/userRepository');
const helper = require('../helpers/helper');
const mercadoLivreHelper = require('../helpers/mercadoLivreHelper');
const accountService = require('../services/accountService');

class UserService {

  constructor() {
    this.mlHelper = new mercadoLivreHelper();
    this.repository = new userRepository();
    this.accountService = new accountService();
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
    password = await helper.generatePassword(password);

    let exist = await this.repository.getUSerByEmail(email);

    if(exist) {
      throw 'Já existe um usuário cadastrado com este email.';
    }

    await this.repository.createNewUser({name, email, password, status});

    return await this.repository.getUSerByEmail(email);
  }

  createUserTest = async(idUser, idAccount) => {
    const account = await this.accountService.getAccountByIdUser(idUser, idAccount);

    if(!account) {
      return null;
    }

    const userTest = await this.mlHelper.createUserTest(account.accessToken);

    if(!userTest) {
      return null;
    }

    const dataUserTest = {
      idMl: userTest.id,
      nickname: userTest. nickname,
      password: userTest.password,
      siteStatus: userTest.site_status
    };

    return this.repository.createUserTest(dataUserTest);
  }
}

module.exports = UserService;