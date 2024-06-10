const { Customer, CommunicationLog } = require('../models');
const axios = require('axios');

const sendCampaign = async (req, res) => {
  try {
    const audience = req.body.audience;
    const message = req.body.message;

    audience.forEach(async customerId => {
      const customer = await Customer.findByPk(customerId);
      if (customer) {
        const personalizedMessage = `Hi ${customer.name}, ${message}`;
        const log = await CommunicationLog.create({
          customerId: customer.id,
          message: personalizedMessage,
        });

        // Simulate sending the message
        const status = Math.random() < 0.9 ? 'SENT' : 'FAILED';

        // Call Delivery Receipt API
        await axios.post('http://localhost:3000/campaigns/receipt', {
          logId: log.id,
          status: status,
        });
      }
    });

    res.status(200).json({ message: 'Campaign sent' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCampaigns = async (req, res) => {
  try {
    const logs = await CommunicationLog.findAll();
    res.status(200).json(logs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  sendCampaign,
  getCampaigns,
};
