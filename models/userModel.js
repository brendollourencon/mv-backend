const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const UserModel = sequelize.define('UserModel', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.BOOLEAN
  }
}, {
  tableName: 'users',
  defaultScope: {
    attributes: { exclude: ['password'] }
  }
});

module.exports = UserModel;