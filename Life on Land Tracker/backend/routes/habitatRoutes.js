const express = require('express');
const router = express.Router();
const habitatController = require('../controllers/habitatController');

router.post('/', habitatController.createHabitat);
router.get('/', habitatController.getAllHabitats);
router.get('/:id', habitatController.getHabitatById);
router.put('/:id', habitatController.updateHabitat);
router.delete('/:id', habitatController.deleteHabitat);

module.exports = router;
