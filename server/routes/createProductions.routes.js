const express = require('express');
const router = express.Router();

const createProductionsController = require('../controllers/createProductions.controller');

// add production
router
  .route('/productions/add')
  .post(createProductionsController.addProduction);

module.exports = router;
