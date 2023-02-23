const { sequelize } = require('../config/db.config.js');
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
		res.send({err});
	})
};

exports.findAll = (req, res) => {
	Publication.findAll().then(pub => {
		res.send(pub);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findOne = (req, res) => {
	// sequelize.literal(`SELECT idUser, idPub, head, description, publications.img, autor FROM publications LEFT JOIN users 
	// ON publications.autor = users.idUser where publications.idPub = `+ req.body.id +`;`)
	// .then(pub => {
	// 		res.send(pub);
	// 	})
	// .catch(err => {
	// 	res.status(500).send("Error -> " + err);
	// })
	// Publication.findAll({attributes: {include: [sequelize.literal(`(SELECT idUser FROM users where users.idUser = publications.autor`), 'idUser']}}).then(pub => {
	// 	res.send(pub);
	// }).catch(err => {
	// 	res.status(500).send("Error -> " + err);
	// })
	Publication.findOne({where: {idPub: req.body.id}}).then(pub => {
		res.send(pub);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
