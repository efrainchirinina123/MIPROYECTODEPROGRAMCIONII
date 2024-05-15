const express = require('express');
const router = express.Router();
const {validarToken, validarPermisos} = require('../../middlewares/auth');

// * AUTH
router.use('/auth', require('./auth'));

// * Routes Add With generate
router.use('/roles', require('./roles.route'));
router.use('/productos', require('./productos.route'));
router.use('/facturas', require('./facturas.route'));
router.use('/carritos', require('./carritos.route'));
router.use('/pagos', require('./pagos.route'));
router.use('/historia_ventas', require('./historia_ventas.route'));
module.exports = router;
