const express = require('express');
const router = express.Router();

const productosController = require('../../controllers/api/productosController');

router.get('/', productosController.index);
router.post('/', productosController.create);
router.put('/:id', productosController.update);
router.get('/:id', productosController.show);
router.delete('/:id', productosController.delete);

module.exports = router;
