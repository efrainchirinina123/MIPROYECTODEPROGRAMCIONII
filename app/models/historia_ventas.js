'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class historia_ventas extends Model {
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
				id_producto: this.id_producto,
				nombre: this.nombre,
				fecha_compra: this.fecha_compra,
				cantidad: this.cantidad,

			};
		}
	}
	historia_ventas.init(
		{
			
			
		
			id_producto: DataTypes.INTEGER,
			nombre: DataTypes.STRING,
			fecha_compra: DataTypes.DATE,
			cantidad: DataTypes.INTEGER,
			
			
			
		},
		{
			sequelize,
			modelName: 'historia_ventas',
		}
	);
	return historia_ventas;
};
