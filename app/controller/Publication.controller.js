const { sequelize } = require('../config/db.config.js');
const { Op } = require("sequelize");
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
exports.update = (req, name, res) => {
	if (req.body.category) {
	Category.findOrCreate({
		attributes: ['idCat'],
		where: {
			nameCat: req.body.category
		},
		default: {
			nameCat: req.body.category
		}
	}).then(cat => {
		console.log(cat[0].dataValues.idCat);
		Publication.update({ category: cat[0].dataValues.idCat }, { where: {idPub: req.body.id} }).then(pub => {
		}).catch(err => {
		})
	}).catch(err => {
	})
	}
	if (req.body.head) {
		Publication.update({ head: req.body.head }, { where: {idPub: req.body.id} }).then(pub => {
		}).catch(err => {
		})
	}
	if (req.body.description) {
		Publication.update({ description: req.body.description }, { where: {idPub: req.body.id} }).then(pub => {
		}).catch(err => {
		})
	}
	if (req.body.category) {
		Publication.update({ category: req.body.category }, { where: {idPub: req.body.id} }).then(pub => {
		}).catch(err => {
		})
	}
	if (name) {
		Publication.update({ img: name }, { where: {idPub: req.body.id} }).then(pub => {
		}).catch(err => {
		})
	}
	res.send({msj: 'Editado exitosamente'})
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
exports.findAllFilCat = (req, res) => {
	Category.findAll({attributes: ['idCat'], where: {nameCat: {[Op.like]: `${req.body.cat}%`}}}).then(cat => {
    let dataC = []
    cat.forEach(c => {
      dataC.push(c.dataValues.idCat)
    });
		if (req.body.autor) {
			Users.findAll({attributes: ['idUser'], where: {name: {[Op.like]: `${req.body.autor}%`}}}).then(user => {
				let dataU = []
				cat.forEach(c => {
					dataU.push(c.dataValues.idCat)
				});
				Publication.findAll({where: {category: dataC, autor: dataU}}).then(pub => {
					res.send(pub)
				}).catch(err => {
					res.status(500).send("Error -> " + err);
				})
			}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
		} else {
			Publication.findAll({where: {category: dataC}}).then(pub => {
				res.send(pub)
			}).catch(err => {
				res.status(500).send("Error -> " + err);
			})
		}
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
exports.findAllFilAutor = (req, res) => {
	Users.findAll({attributes: ['idUser'], where: {name: {[Op.like]: `${req.body.autor}%`}}}).then(user => {
    let data = []
    user.forEach(c => {
      data.push(c.dataValues.idUser)
    });
		Publication.findAll({where: {autor: data}}).then(pub => {
			res.send(pub)
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
exports.destroy = (req, res) => {
	Publication.destroy({where: {idPub: req.params.id}}).then(pub => {
		res.send({msg: 'Eliminado'});
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
