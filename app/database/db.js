'use strict';

const Sequelize = require('sequelize');
const config = require('../../config/database');
const mysql2 = require('mysql2');

const db = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: 'mysql',
	dialectModule: mysql2,
	port: config.port,
	logging: false,
});

module.exports = db;
