const accountModel = require('../models/accountModel');

class AccountRepository {

  constructor() {
    this.model = accountModel;
  }

  getAccountByEmail = async(email, idUser) => {
    return await this.model.findOne({
      where: {
        email: email,
        idUser: idUser
      }
    });
  }

  createNewAccount = async(account) => {
    return this.model.create(account);
  }

  updateAccount = async(email, account) => {
    return await this.model.update(account, {
      where: {
        email: email
      }
    });
  }

  getAccountByIdUser = async(idUser, idAccount) => {
    return await this.model.findOne({
      where: {
        idUser: idUser,
        id: idAccount
      }
    })
  }

}

module.exports = AccountRepository;