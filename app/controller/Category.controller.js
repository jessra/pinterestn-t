const db = require('../config/db.config.js');
const Category = db.Category;

exports.findOrCreate = (req, res) => {
  console.log(req.body);
	Category.findOrCreate({
		attributes: ['idCat'],
		where: {
			nameCat: req.body.category
		},
		default: {
			nameCat: req.body.category
		}
	}).then(cat => {
		res.send(cat)
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
}

exports.findAll = (req, res) => {
	Category.findAll().then(cat => {
		res.send(cat);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};