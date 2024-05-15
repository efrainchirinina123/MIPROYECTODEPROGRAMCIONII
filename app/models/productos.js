'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class productos extends Model {
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
				imagen: this.imagen,
				nombre: this.nombre,
				descripcion: this.descripcion,
				precio_normal:this.precio_normal	,
				precio_rebajado:this.precio_rebajado,
				cantidad: this.cantidad,
				categoria: this.categoria,

			};
		}
	}
	productos.init(
		{
			
			imagen: DataTypes.STRING,
			nombre: DataTypes.STRING,
			descripcion: DataTypes.INTEGER,
			precio_normal: DataTypes.INTEGER,
			precio_rebajado: DataTypes.INTEGER,
			cantidad: DataTypes.INTEGER,
			categoria: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'productos',
		}
	);
	return productos;
};
