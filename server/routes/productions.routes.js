const express = require('express');
const router = express.Router();

const ProductionsController = require('../controllers/productions.controller');

//get productions
router.route('/productions').get(ProductionsController.getProductions);
// get current
router.route('/productions/current').get(ProductionsController.getCurrent);
//get canceled
router.route('/productions/canceled').get(ProductionsController.getCanceled);

// get productions by range
router
  .route('/productions/range/:startAt/:limit/:sortParam')
  .get(ProductionsController.getProductionsByRange);

// get single product
router.route('/productions/:id').get(ProductionsController.getSingleProduction);

// find and update product
router.route('/productions/:id').patch(ProductionsController.editProduction);

// find decreace amount of 1 product
router.route('/productions/:id').put(ProductionsController.removeOneAmount);

// find and delete product
router.route('/productions/:id').delete(ProductionsController.deleteProduction);

// add production
router.route('/productions/add').post(ProductionsController.addProduction);

// cancel production
router
  .route('/productions/cancel/:id')
  .put(ProductionsController.toggleCancelProduction);
module.exports = router;

// finish production
router
  .route('/productions/finish/:id')
  .put(ProductionsController.toggleFinishProduction);
module.exports = router;
