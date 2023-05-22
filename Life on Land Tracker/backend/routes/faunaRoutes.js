const express = require('express');
const router = express.Router();
const faunaController = require('../controllers/faunaController');

router.post('/', faunaController.createFauna);
router.get('/', faunaController.getAllFauna);
router.get('/:id', faunaController.getFaunaById);
router.put('/:id', faunaController.updateFauna);
router.delete('/:id', faunaController.deleteFauna);

module.exports = router;
