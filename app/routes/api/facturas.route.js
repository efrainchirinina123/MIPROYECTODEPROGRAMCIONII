const express = require('express');
const router = express.Router();

const facturascontroller = require('../../controllers/api/facturasController');

router.get('/', facturascontroller.index);
router.post('/', facturascontroller.create);
router.put('/:id', facturascontroller.update);
router.get('/:id', facturascontroller.show);
router.delete('/:id', facturascontroller.delete);

module.exports = router;
