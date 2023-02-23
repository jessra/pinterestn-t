const db = require('../config/db.config.js');
const Users = db.Users;

exports.create = (req, name, res) => {	
	Users.create({  
		name: req.body.name,
		pass: req.body.pass,
		img: name
	}).then(user => {		
		res.send(user);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findAll = (req, res) => {
	Users.findAll().then(user => {
		res.send(user);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
