class AccountController {

  async handle(req, res){
    res.send('okkkkk');
  }

  async save(req, res) {
    res.send('save');
  }

  async getAccountById(req, res){
    const {id} = req.params;
    res.send(`id: ${id}`);
  }

  async getAllAccounts(req, res){
    res.send('all accounts');
  }

  async authorizeAccountApp(req, res){
    res.send('authorization');
  }

}

module.exports = new AccountController();