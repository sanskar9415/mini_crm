const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CommunicationLog = sequelize.define('CommunicationLog', {
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'PENDING',
  },
});

module.exports = CommunicationLog;
