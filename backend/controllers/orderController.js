const { Order, Customer } = require('../models');

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    const customer = await Customer.findByPk(order.customerId);
    customer.totalSpends += order.amount;
    customer.maxVisits += 1;
    customer.lastVisit = new Date();
    await customer.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
};
