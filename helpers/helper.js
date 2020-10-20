const bcrypt = require('bcrypt');

class Helper {

  static generatePassword = async(pass, salt = 10) => {
    return new Promise((resolve, reject) => {
      return bcrypt.hash(pass, salt, (err, hash) => {
        if(err) {
          reject(err);
        }
        resolve(hash);
      });
    })
  }

}

module.exports = Helper;