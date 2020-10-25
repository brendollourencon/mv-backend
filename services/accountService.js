const mercadoLivreHelper = require('../helpers/mercadoLivreHelper');
const accountRepository = require('../repositories/accountRepository');

class AccountService {

  constructor() {
    this.repository = new accountRepository();
    this.mlHelper = new mercadoLivreHelper();
  }

  createNewAccount = async(code, idUSer) => {
    const result = await this.mlHelper.authenticateNewAccount(code);

    if(!result) {
      throw 'Houve um erro ao tentar autenticar no mercado livre.';
    }

    const {access_token, token_type, expires_in, scope, user_id, refresh_token} = result;

    const infoUserMl = await this.mlHelper.getInfoAccount(user_id, access_token);

    if(!infoUserMl) {
      throw 'Houve um erro ao tentar capturar as informações de usuário';
    }

    const existAccount = await this.repository.getAccountByEmail(infoUserMl.email, idUSer);

    let account = {
      code: code,
      accessToken: access_token,
      tokenType: token_type,
      expiresIn: expires_in,
      scope: scope,
      nickname: infoUserMl.nickname,
      email: infoUserMl.email,
      permalink: infoUserMl.permalink,
      refreshToken: refresh_token,
      status: true,
      idUser: idUSer,
      idUserMl: infoUserMl.id
    };

    if(!existAccount) {
      await this.repository.createNewAccount(account);
    } else {
      await this.repository.updateAccount(infoUserMl.email, account);
    }
    return account;
  }

  refreshToken = async(email, idUser) => {
    let account = await this.repository.getAccountByEmail(email, idUser);

    if(!account) {
      throw 'Não foi encontrado nenhuma conta com este email';
    }

    const refreshAccount = await this.mlHelper.refreshToken(account.refresh_token);
  }
}

module.exports = AccountService;