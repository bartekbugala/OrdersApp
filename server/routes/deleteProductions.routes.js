const express = require('express');
const router = express.Router();

const deleteProductionsController = require('../controllers/deleteProductions.controller');

// find and delete product
router
  .route('/productions/:id')
  .delete(deleteProductionsController.deleteProduction);

module.exports = router;
