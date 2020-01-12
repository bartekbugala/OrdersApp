const express = require('express');
const router = express.Router();

// C.R.U.D. routes
const createProductionsController = require('../controllers/createProductions.controller');
const readProductionsController = require('../controllers/readProductions.controller');
const updateProductionsController = require('../controllers/updateProductions.controller');
const deleteProductionsController = require('../controllers/deleteProductions.controller');

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

// find and update product
router
  .route('/productions/:id')
  .patch(updateProductionsController.editProduction);

// find decreace amount of 1 product
router
  .route('/productions/:id')
  .put(updateProductionsController.removeOneAmount);

// add production
router
  .route('/productions/add')
  .post(createProductionsController.addProduction);

// cancel production
router
  .route('/productions/cancel/:id')
  .put(updateProductionsController.toggleCancelProduction);
module.exports = router;

// finish production
router
  .route('/productions/finish/:id')
  .put(updateProductionsController.toggleFinishProduction);
module.exports = router;

// transport production
router
  .route('/productions/transport/:id')
  .put(updateProductionsController.toggleTransportProduction);
module.exports = router;

// find and delete product
router
  .route('/productions/:id')
  .delete(deleteProductionsController.deleteProduction);
