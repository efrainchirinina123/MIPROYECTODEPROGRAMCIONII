const rolesService = require('../../services/rolesService');

module.exports = {
	async index(req, res) {
		const response = await rolesService.index(req.query);
		res.status(200).json(response);
	},
	async show(req, res) {
		const {id} = req.params;
		const response = await rolesService.show(id);
		res.status(200).json(response);
	},
	async create(req, res) {
		const {body} = req;

		const response = await rolesService.create(body);
		res.status(200).json(response);
	},
	async update(req, res) {
		const {id} = req.params;
		const {body} = req;
		const response = await rolesService.update(id, body);
		res.status(200).json(response);
	},
	async delete(req, res) {
		const {id} = req.params;
		const response = await rolesService.delete(id);
		res.status(200).json(response);
	},

	// * VIEWS
	// async listView(req, res) {
	// 	res.render('home/tipo_cursos');
	// },
};
