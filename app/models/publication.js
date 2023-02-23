'use strict'
module.exports = (sequelize, Sequelize) => {
	let Publication = sequelize.define('publications', {
    idPub: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
	  head: {
		type: Sequelize.STRING,
		allowNull: false
	  },
	  description: {
		type: Sequelize.TEXT
	  },
		autor: {
		type: Sequelize.SMALLINT,
		allowNull: false
		},
		img: {
		type: Sequelize.TEXT,
		allowNull: false
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

  Publication.associate = models => {
    Publication.belongsTo(models.users)
  }
	return Publication;
}