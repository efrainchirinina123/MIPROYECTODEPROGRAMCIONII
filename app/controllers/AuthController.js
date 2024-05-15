const AuthServices = require('../services/AuthServices');
// const pdfService = require('../services/PdfKitService');

module.exports = {
	async register(req, res) {
		const {body} = req;
		const response = await AuthServices.register(body, res);

		res.status(response.statusCode).json(response);
	},

	async login(req, res) {
		const response = await AuthServices.login(req, res);
		res.status(response.statusCode).json(response);
	},

	async index(req, res) {
		const response = await AuthServices.index();
		res.status(response.statusCode).json(response);
	},

	async show(req, res) {
		const {id} = req.params;
		const response = await AuthServices.show(id);
		res.status(response.statusCode).json(response);
	},

	async update(req, res) {
		const {id} = req.params;
		const {body} = req;
		const response = await AuthServices.update(id, body);
		res.status(response.statusCode).json(response);
	},

	async delete(req, res) {
		const {id} = req.params;
		const response = await AuthServices.delete(id);
		res.status(response.statusCode).json(response);
	},

	async reporteAll(req, res) {
		const {query} = req;
		const response = await AuthServices.reporte(query);
		return pdfService.crearPdf(res, response.data, 'Datos de los usuarios');
	},
	async sendEmail(req, res) {
		const {email} = req.body;
		const response = await AuthServices.sendEmail(email);
		res.status(response.statusCode).json(response);
	},
	async resetPassword(req, res) {
		const response = await AuthServices.resetPassword(req.body);
		res.status(response.statusCode).json(response);
	},
};
