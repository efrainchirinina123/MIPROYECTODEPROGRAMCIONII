const express = require('express');
const router = express.Router();

const carritoscontroller = require('../../controllers/api/carritoscontroller');

router.get('/', carritoscontroller.index);
router.post('/', carritoscontroller.create);
router.put('/:id', carritoscontroller.update);
router.get('/:id', carritoscontroller.show);
router.delete('/:id', carritoscontroller.delete);

module.exports = router;
