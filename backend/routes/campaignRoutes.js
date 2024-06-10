const express = require('express');
const { sendCampaign, getCampaigns } = require('../controllers/campaignController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, sendCampaign);
router.get('/', authMiddleware, getCampaigns);

module.exports = router;
