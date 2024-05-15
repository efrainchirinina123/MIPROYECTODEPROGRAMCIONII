'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class role extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// this.hasMany(models.role_module, {
			// 	foreignKey: 'id_rol',
			// });

			this.hasMany(models.user, {
				foreignKey: 'id_rol',
			});
		}

		fromDataModel() {
			return {
				id: this.id,
				nombre: this.name,
				estado: this.active === 0 ? false : true,
			};
		}
	}
	role.init(
		{
			name: DataTypes.STRING,
			active: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'role',
		}
	);
	return role;
};
