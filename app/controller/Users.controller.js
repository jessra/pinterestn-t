const db = require('../config/db.config.js');
const Users = db.Users;
const jwt = require('jsonwebtoken');
const config = require('../config')

exports.create = (req, name, res) => {	
	Users.create({  
		name: req.body.name,
		pass: req.body.pass,
		img: name
	}).then(user => {
    const token = jwt.sign({ id: user.idUser }, config.secret, {
      expiresIn: 60 * 60 * 12
    });
		res.send({user, token});
	}).catch(err => {
		res.send({err});
	})
};

exports.findAll = (req, res) => {
	Users.findAll().then(user => {
		res.send(user);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
