'use strict'
module.exports = (sequelize, Sequelize) => {
	let Category = sequelize.define('categorys', {
    idCat: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
	  nameCat: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: {
			msg: 'Categoría ya existente'
		},
	  },
		createdAt: {
			type: Sequelize.DATE,
			field: 'created_at',
			defaultValue: Sequelize.NOW
		},
		updatedAt: {
			type: Sequelize.DATE,
			field: 'update_at',
			defaultValue: Sequelize.NOW
		}
	}, {
		// freezeTableName: true
	});

	return Category;
}