const express = require('express');
const router = express.Router();
const userRoutes = require('./api/users');

// Define main routes
router.use('/api/users', userRoutes);

module.exports = router;