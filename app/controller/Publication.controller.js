const db = require('../config/db.config.js');
const Publication = db.Publication;
const Category = require('./Category.controller')


exports.create = (req, name, res) => {
	Publication.create({  
		head: req.body.head,
		description: req.body.description,
    autor: req.body.autor,
    img: name,
		category: req.body.category
	}).then(pub => {		
		res.send(pub);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findAll = (req, res) => {
	Publication.findAll().then(pub => {
		res.send(pub);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
