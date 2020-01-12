const express = require('express');
const router = express.Router();

const readProductionsController = require('../controllers/readProductions.controller');

//get productions
router.route('/productions').get(readProductionsController.getProductions);
// get current
router.route('/productions/current').get(readProductionsController.getCurrent);
//get canceled
router
  .route('/productions/canceled')
  .get(readProductionsController.getCanceled);
//get finished
router
  .route('/productions/finished')
  .get(readProductionsController.getFinished);
//get transported
router
  .route('/productions/transported')
  .get(readProductionsController.getTransported);

// get productions by range
router
  .route('/productions/range/:startAt/:limit/:sortParam')
  .get(readProductionsController.getProductionsByRange);

// get single product
router
  .route('/productions/:id')
  .get(readProductionsController.getSingleProduction);

module.exports = router;
