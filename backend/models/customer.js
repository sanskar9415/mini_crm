const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  totalSpends: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  maxVisits: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  lastVisit: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Customer;
