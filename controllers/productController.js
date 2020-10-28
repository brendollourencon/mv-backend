const accountService = require('../services/accountService')

class ProductController {

  constructor() {
    this.service = new accountService();
  }

  createNewAccount = async(req, res) => {
    try {
      const {code, state} = req.query;
      const idUser = state;

      if(!code || !idUser) {
        throw 'Não foi possivel vincular uma nova conta.';
      }

      let account = await this.service.createNewAccount(code, idUser);

      res.status(200).send({
        error: false,
        data: account
      });
    } catch(e) {
      res.status(400).send({
        error: e,
        data: []
      });
    }
  }

  refreshTokenAccount = async(req, res) => {
    try {
      const {email, idUser} = req.body;

      if(!email || !idUser){
        throw 'Email e/ou id do usuário é inválido.';
      }

      let account = await this.service.refreshToken(email, idUser);

      res.status(200).send({
        error: false,
        data: account
      });
    } catch(e) {
      res.status(400).send({
        error: e,
        data: []
      });
    }
  }
}

module.exports = AccountController;