const express = require('express');
const router = express.Router();
const observationController = require('../controllers/observationController');

router.post('/', observationController.createObservation);
router.get('/', observationController.getAllObservations);
router.get('/:id', observationController.getObservationById);
router.put('/:id', observationController.updateObservation);
router.delete('/:id', observationController.deleteObservation);

module.exports = router;
