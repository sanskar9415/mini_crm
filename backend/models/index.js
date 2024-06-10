const sequelize = require('../config/database');
const Customer = require('./customer');
const Order = require('./order');
const CommunicationLog = require('./communicationLog');

Customer.hasMany(Order, { foreignKey: 'customerId' });
Order.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = {
  sequelize,
  Customer,
  Order,
  CommunicationLog,
};
