const { Customer } = require('../models');

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCustomer,
  getCustomers,
};
