const express = require('express');
const router = express.Router();

const ProductionsController = require('../controllers/productions.controller');

//get all
router.route('/productions').get(ProductionsController.getProductions);

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

// add productions
router.route('/productions').post(ProductionsController.addProduction);

module.exports = router;
