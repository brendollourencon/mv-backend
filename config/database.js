const config = require('../config/config');
const {Sequelize} = require('sequelize');

const db = config.database;

class Database {
  constructor() {
    this.sequelize = new Sequelize(db.name, db.user, db.pass, {
      host: db.host,
      dialect: db.dialect
    });
  }
}

module.exports = new Database().sequelize;