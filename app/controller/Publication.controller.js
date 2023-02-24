const { sequelize } = require('../config/db.config.js');
const db = require('../config/db.config.js');
const Publication = db.Publication;
const Users = db.Users;
const Category = db.Category;


exports.create = (req, name, res) => {
	Publication.create({  
		head: req.body.head,
		description: req.body.description,
    autor: req.userid,
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

exports.findOnePub = (req, res) => {
	Publication.findOne({where: {idPub: req.body.id}}).then(pub => {
		Users.findOne({attributes: ['name'], where: {idUser: pub.autor}}).then(user => {
			Category.findOne({attributes: ['nameCat'], where: {idCat: pub.category}}).then(cat => {
				res.send({pub, user, cat});
			}).catch(err => {
				res.status(500).send("Error -> " + err);
			})
		}).catch(err => {
			res.status(500).send("Error -> " + err);
		})
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findAllUser = (req, res) => {
	Publication.findAll({where: {autor: req.userid}}).then(pub => {
		res.send(pub);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
