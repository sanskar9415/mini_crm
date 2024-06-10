const express = require('express');
const { createCustomer, getCustomers } = require('../controllers/customerController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// router.post('/', authMiddleware, createCustomer);
// router.get('/', authMiddleware, getCustomers);
router.post('/',  createCustomer);
router.get('/', getCustomers);

module.exports = router;
