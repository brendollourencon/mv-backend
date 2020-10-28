const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const UserTestModel = sequelize.define('UserTestModel', {
  idMl: DataTypes.STRING,
  nickname: DataTypes.STRING,
  password: DataTypes.STRING,
  siteStatus: DataTypes.STRING
}, {
  tableName: 'userTest'
});

module.exports = UserTestModel;