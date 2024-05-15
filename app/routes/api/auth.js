const express = require('express');
const {check} = require('express-validator');

const router = express.Router();
const authController = require('../../controllers/AuthController');
const {validateFields} = require('../../middlewares/validateFields');

router.post(
	'/signUp',
	[
		check('name', 'El name es Requerido').trim().escape().not().isEmpty(),
		check('email', 'El email es Requerido').trim().escape().not().isEmpty(),
		check('email', 'El email debe tener un formato correcto').trim().escape().isEmail(),
		check('username', 'El username es requerido').trim().escape().not().isEmpty(),
		check('password', 'La password es requerida').trim().escape().not().isEmpty(),
		check('password', 'La password debe ser mayor a 6 caracteres').isLength({
			min: 6,
		}),
		check('sexo', 'Los valores admitidos son Masculino, Femenino')
			.isIn(['Masculino', 'Femenino'])
			.optional({nullable: true}),
		validateFields,
	],
	authController.register
);

router.post(
	'/login',
	[
		check('username', 'El username es requerido').trim().escape().not().isEmpty(),
		check('password', 'La password es requerida').trim().escape().not().isEmpty(),
		// check('password', 'La password debe ser mayor a 6 caracteres').isLength({
		// 	min: 6,
		// }),
		validateFields,
	],
	authController.login
);

module.exports = router;
