const express = require('express');
const router = express.Router();

const readProductionsController = require('../controllers/readProductions.controller');

//get productions
router
  .route('/productions/:startDate/:endDate')
  .get(readProductionsController.getProductions);
// get current
router
  .route('/productions/current/:startDate/:endDate')
  .get(readProductionsController.getCurrent);
//get canceled
router
  .route('/productions/canceled/:startDate/:endDate')
  .get(readProductionsController.getCanceled);
//get finished
router
  .route('/productions/finished/:startDate/:endDate')
  .get(readProductionsController.getFinished);
//get transported
router
  .route('/productions/transported/:startDate/:endDate')
  .get(readProductionsController.getTransported);

// get productions by range - not used
router
  .route('/productions/range/:startAt/:limit/:sortParam')
  .get(readProductionsController.getProductionsByRange);

// get single production
router
  .route('/productions/:id')
  .get(readProductionsController.getSingleProduction);

module.exports = router;
