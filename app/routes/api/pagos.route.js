const express = require('express');
const router = express.Router();

const pagosController= require('../../controllers/api/pagosController');
router.get('/', pagosController.index);
router.post('/', pagosController.create);
router.put('/:id', pagosController.update);
router.get('/:id', pagosController.show);
router.delete('/:id', pagosController.delete);

module.exports = router;
