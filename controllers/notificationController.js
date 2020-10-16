class NotificationController{

  async handle(req, res){
    res.send('ok');
  }

}

module.exports = new NotificationController();