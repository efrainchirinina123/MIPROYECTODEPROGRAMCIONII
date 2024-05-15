const facturaServices = require('../../services/facturasServices');

module.exports = {
	async index(req, res) {
		const response = await facturaServices.index(req.query);
		res.status(200).json(response);
	},
	async show(req, res) {
		const {id} = req.params;
		const response = await facturaServices.show(id);
		res.status(200).json(response);
	},
	async create(req, res) {
		const {body} = req;

		const response = await facturaServices.create(body);
		res.status(200).json(response);
	},
	async update(req, res) {
		const {id} = req.params;
		const {body} = req;
		const response = await facturaServices.update(id, body);
		res.status(200).json(response);
	},
	async delete(req, res) {
		const {id} = req.params;
		const response = await facturaServices.delete(id);
		res.status(200).json(response);
	},

	// * VIEWS
	// async listView(req, res) {
	// 	res.render('home/tipo_cursos');
	// },
};
