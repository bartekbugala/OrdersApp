const express = require('express');
const router = express.Router();

const updateProductionsController = require('../controllers/updateProductions.controller');

// find and update product
router
  .route('/productions/update/:id')
  .put(updateProductionsController.updateProduction);

// find decreace amount of 1 product
router
  .route('/productions/:id')
  .put(updateProductionsController.removeOneAmount);

// cancel production
router
  .route('/productions/cancel/:id')
  .put(updateProductionsController.toggleCancelProduction);

// finish production
router
  .route('/productions/finish/:id')
  .put(updateProductionsController.toggleFinishProduction);

// transport production
router
  .route('/productions/transport/:id')
  .put(updateProductionsController.toggleTransportProduction);

module.exports = router;
