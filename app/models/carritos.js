'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class carritos extends Model {
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
				id_usuario: this.id_usario,
				id_producto: this.id_producto,
				descripcion: this.descripcion,
				cantidad_selecionada:this.cantidad_selecionada,
				

			};
		}
	}
	carritos.init(
		{
			
			
			id_usuario: DataTypes.INTEGER,
			id_producto: DataTypes.INTEGER,
			descripcion: DataTypes.STRING,
			cantidad_selecionada: DataTypes.INTEGER,
			
		},
		{
			sequelize,
			modelName: 'carritos',
		}
	);
	return carritos;
};
