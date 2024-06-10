const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// router.post('/', authMiddleware, createOrder);
// router.get('/', authMiddleware, getOrders);

router.post('/',  createOrder);
router.get('/',  getOrders);

module.exports = router;
