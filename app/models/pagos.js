'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class pagos extends Model {
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
				metodo_pago: this.metodo_pago,
				id_factura: this.id_factura,
				fecha_pago: this.fecha_pago,

			};
		}
	}
	pagos.init(
		{
			
			
		
			metodo_pago: DataTypes.INTEGER,
			id_factura: DataTypes.INTEGER,
			fecha_pago: DataTypes.DATE,
			
			
		},
		{
			sequelize,
			modelName: 'pagos',
		}
	);
	return pagos;
};
