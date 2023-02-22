'use strict'
module.exports = (sequelize, Sequelize) => {
	let Fav = sequelize.define('favs', {
    idFav: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
	  idUserFav: {
		type: Sequelize.SMALLINT,
		allowNull: false
	  },
	  idPubliFav: {
		type: Sequelize.SMALLINT,
		allowNull: false
	  },
		createdAt: {
			type: Sequelize.DATE,
			field: 'created_at',
			defaultValue: Sequelize.NOW
		},
		updateAt: {
			type: Sequelize.DATE,
			field: 'update_at',
			defaultValue: Sequelize.NOW
		},
		deletedAt: {
			type: Sequelize.DATE,
			field: 'deleted_at',
			defaultValue: Sequelize.NOW
		}
	}, {
		paranoid: true,
		freezeTableName: true
	});

	return Fav;
}