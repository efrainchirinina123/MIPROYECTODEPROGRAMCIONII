'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class facturas extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// this.hasMany(models.role_module, {
			// 	foreignKey: 'id_rol',
			// });

			// this.hasMany(models.user, {
				// foreignKey: 'id_rol',
			// });
		}

		fromDataModel() {
			return {
				id: this.id,
				fecha_factura: this.fecha_factura,
				numero_factura: this.numero_factura,
				url_factura: this.url_facutra,

			};
		}
	}
	facturas.init(
		{
			
			
			fecha_factura: DataTypes.DATE,
			numero_factura: DataTypes.INTEGER,
			url_factura: DataTypes.STRING,
			
		},
		{
			sequelize,
			modelName: 'facturas',
		}
	);
	return facturas;
};
