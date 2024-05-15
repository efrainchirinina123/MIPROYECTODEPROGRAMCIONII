const express = require('express');
const router = express.Router();

const historia_ventasController = require('../../controllers/api/historia_ventasController');

router.get('/', historia_ventasController.index);
router.post('/', historia_ventasController.create);
router.put('/:id', historia_ventasController.update);
router.get('/:id', historia_ventasController.show);
router.delete('/:id', historia_ventasController.delete);

module.exports = router;
