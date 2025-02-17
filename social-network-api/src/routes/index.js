// filepath: /social-network-api/social-network-api/src/routes/index.js

const router = require('express').Router();
const apiRoutes = require('./api');

// Add API routes
router.use('/api', apiRoutes);

// Export the router
module.exports = router;