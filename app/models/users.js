'use strict'
module.exports = (sequelize, Sequelize) => {
	let Users = sequelize.define('users', {
    idUser: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
	  name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: {
			msg: 'Usuario ya existente'
		},
	  },
	  pass: {
		type: Sequelize.STRING,
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
		},
	}, {
		// freezeTableName: true
	});
  
  Users.associate = models => {
    Users.hasMany(models.publications)
  }
	return Users;
}