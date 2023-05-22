const express = require('express');
const router = express.Router();
const floraController = require('../controllers/floraController');

router.post('/', floraController.createFlora);
router.get('/', floraController.getAllFlora);
router.get('/:id', floraController.getFloraById);
router.put('/:id', floraController.updateFlora);
router.delete('/:id', floraController.deleteFlora);

module.exports = router;
