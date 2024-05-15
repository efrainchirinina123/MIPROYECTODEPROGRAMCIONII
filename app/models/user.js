'use strict';
const {Model} = require('sequelize');
const {v4: uuidv4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
	class user extends Model {
		static associate(models) {
			this.belongsTo(models.role, {
				foreignKey: 'id_rol',
			});
		}
	}
	user.init(
		{
			name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			email: DataTypes.STRING,
			date_birth: DataTypes.DATE,
			address: DataTypes.STRING,
			cellphone: DataTypes.STRING,
			ci_number: DataTypes.STRING,
			ci_expedition: DataTypes.STRING,
			picture_image: DataTypes.STRING,
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			token_reset_clave: DataTypes.STRING,
			id_rol: DataTypes.INTEGER,
			active: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'user',
		}
	);
	return user;
};
