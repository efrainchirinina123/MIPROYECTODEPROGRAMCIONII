const {Op} = require('sequelize');
const {Sequelize} = require('../models');

class Filter {
	static async applyFilter(query, ModelName) {
		try {
			const filters = query;
			const searchValue = 'filter';
			let queryWithFilter = [];

			for (const key in filters) {
				let value = filters[key];

				if (value === 'true') value = true;
				else if (value === 'false') value = false;

				const fieldArray = key.split('_');

				if (fieldArray.includes(searchValue)) {
					const table = fieldArray[0];
					const fieldArrayWithoutFirstAndLastElement = fieldArray.slice(1, -1);
					const field = fieldArrayWithoutFirstAndLastElement.join('_');

					queryWithFilter.push({
						[Op.and]: Sequelize.literal(`"${table}"."${field}" LIKE '%${value}%'`),
					});
				} else {
					if (value === true || value === false) {
						queryWithFilter.push({
							[Op.and]: Sequelize.literal(` \`${key}\` = ${value}`),
						});
					} else {
						queryWithFilter.push({
							[Op.and]: Sequelize.literal(` \`${key}\` LIKE '${value}'`),
						});
					}
				}
			}

			const result = await ModelName.findAll({
				where: {
					[Op.and]: queryWithFilter,
				},
			});

			return result;
		} catch (error) {
			return [];
		}
	}
}

module.exports = Filter;
