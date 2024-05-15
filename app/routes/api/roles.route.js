const express = require('express');
const router = express.Router();

const roleController = require('../../controllers/api/roleController');

router.get('/', roleController.index);
router.post('/', roleController.create);
router.put('/:id', roleController.update);
router.get('/:id', roleController.show);
router.delete('/:id', roleController.delete);

module.exports = router;
