const express = require('express');
const { createAudience, checkAudienceSize } = require('../controllers/audienceController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// router.post('/', authMiddleware, createAudience);
// router.post('/check-size', authMiddleware, checkAudienceSize);
router.post('/',  createAudience);
router.post('/check-size',  checkAudienceSize);



module.exports = router;
