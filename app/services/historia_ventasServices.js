
const {historia_ventas} = require('../models/index');
const Filter = require('../utils/filter');
const {InternalServer, NotFoundResponse, BadRequest, Successful} = require('../utils/response');

module.exports = {
	async create(body) {
		try {
			const response = await historia_ventas.create(body);

			return Successful('Item Registrado', response);
		} catch (error) {
			console.log(error);
			return InternalServer('Error en el servidor');
		}
	},

	async index(params = []) {
		try {
			let response = await historia_ventas.findAll({});

			if (Object.keys(params).length > 0) {
				response = await Filter.applyFilter(params, historia_ventas);
			}

			return Successful(
				'Operacion Exitosa',
				response.map((item) => item.fromDataModel())
			);
		} catch (error) {
			console.log(error);
			return InternalServer('Error en el servidor');
		}
	},

	// * funcion para listar un item
	async show(id) {
		try {
			const response = await historia_ventas.findOne({
				where: {
					id: id,
				},
			});
			if (!response) return NotFoundResponse(`historia_ventas con el id: ${id} no existe. `);
			return Successful('Operacion Exitosa', response.fromDataModel());
		} catch (error) {
			console.log(error);
			return InternalServer('Error en el servidor');
		}
	},

	// * funcion para actualizar los datos de un item
	async update(id, body) {
		try {
			const response = await historia_ventas.findOne({
				where: {
					id: id,
				},
			});
			if (!response) return NotFoundResponse(`historia_ventas con el id: ${id} no existe.`);
			await historia_ventas.update(body, {
				where: {
					id: id,
				},
			});

			return Successful('Registro actualizado', []);
		} catch (error) {
			console.log(error);
			return InternalServer('Error en el servidor');
		}
	},

	// * funcion para eliminar un item
	async delete(id) {
		try {
			const response = await historia_ventas.findOne({
				where: {
					id: id,
				},
			});

			if (!response)
				return NotFoundResponse(`La historia_ventas con el id: ${id} que solicitas no existe `);

			await historia_ventas.destroy({
				where: {id: id},
			});
			return Successful('Registro eliminado', []);
		} catch (error) {
			console.log(error);
			return InternalServer('Error en el servidor');
		}
	},
};
