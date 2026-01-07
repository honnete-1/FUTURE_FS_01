const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', submitContact);

module.exports = router;
