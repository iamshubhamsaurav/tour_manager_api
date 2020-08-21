const express = require('express');
const Tour = require('../models/Tour');

const router = express.Router();

const tourController = require('../controllers/tours');

router.route('/').get(tourController.getTours).post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .put(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
