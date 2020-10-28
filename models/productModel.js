const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const AccountModel = require('./accountModel');

const ProductModel = sequelize.define('ProductModel', {
  idMl: DataTypes.STRING,
  siteId: DataTypes.STRING,
  title: DataTypes.STRING,
  price: DataTypes.DOUBLE,
  salePrice: DataTypes.DOUBLE,
  currencyId: DataTypes.STRING,
  availableQuantity: DataTypes.INTEGER,
  soldQuantity: DataTypes.INTEGER,
  buyingMode: DataTypes.STRING,
  listingTypeId: DataTypes.STRING,
  stopTime: DataTypes.DATE,
  condition: DataTypes.STRING,
  permalink: DataTypes.STRING,
  thumbnail: DataTypes.STRING,
  acceptsMercadopago: DataTypes.BOOLEAN,

  installments: DataTypes.JSON,
  address: DataTypes.JSON,
  shipping: DataTypes.JSON,
  sellerAddress: DataTypes.JSON,
  attributes: DataTypes.JSON,
  differential_pricing: DataTypes.JSON,

  originalPrice: DataTypes.DOUBLE,
  categoryId: DataTypes.STRING,
  officialStoreId: DataTypes.STRING,
  domainId: DataTypes.STRING,
  catalogProductId: DataTypes.STRING,

  tags: DataTypes.JSON,
  orderBackend: DataTypes.JSON,

  status: {
    type: DataTypes.BOOLEAN
  },

}, {
  tableName: 'products'
});

ProductModel.belongsTo(AccountModel, {
  as: 'AccountModel',
  foreignKey: 'idUser'
});

module.exports = ProductModel;