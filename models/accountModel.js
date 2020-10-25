const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const UserModel = require('./userModel');

const AccountModel = sequelize.define('AccountModel', {
  code: {
    type: DataTypes.STRING
  },
  accessToken: {
    type: DataTypes.STRING
  },
  tokenType: {
    type: DataTypes.STRING
  },
  expiresIn: {
    type: DataTypes.INTEGER
  },
  scope: {
    type: DataTypes.STRING
  },
  idUserMl: {
    type: DataTypes.INTEGER
  },
  nickname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  permalink: {
    type: DataTypes.STRING
  },
  refreshToken: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.BOOLEAN
  }
}, {
  tableName: 'accounts'
});

AccountModel.belongsTo(UserModel, {
  as: 'UserModel',
  foreignKey: 'idUser'
});

module.exports = AccountModel;