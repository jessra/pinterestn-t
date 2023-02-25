module.exports = function(app) {
  const users = require('../controller/Users.controller.js');
  const publication = require('../controller/Publication.controller.js');
  const category = require('../controller/Category.controller.js');
  const verify = require('../controller/Verify.controller');
  const jwt = require('jsonwebtoken');
  const config = require('../config')
  const multer = require("multer");
  let name = '';
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'cliente/src/imagenesTemporales')
    },
    filename: (req, file, cb) => {
      name = Date.now() + file.originalname
      cb(null, Date.now() + file.originalname)
    },
  })
  
  const upload = multer({ storage: storage })

  // Token
  app.post('/api/token', function (req, res) {
    const token = jwt.sign({ id: req.body.idUser }, config.secret, {
      expiresIn: Date.now() + 60 * 80000
    });
		res.send({token});
  })
  // Users
  app.get('/api/users', users.findAll);
  app.post('/api/aggusers', upload.single('file'), function (req, res) {
    console.log(req.file);
    users.create(req, name, res)
  });

  // Publications
  app.get('/api/publications', publication.findAll);
  app.post('/api/aggpublications', verify, upload.single('file'), function (req, res) {
    publication.create(req, name, res)
  });
  app.post('/api/publication', publication.findOnePub)
  app.post('/api/perfil', verify, function (req, res) {
    publication.findAllUser(req, res)
  })

  // Categorys
  app.get('/api/category', category.findAll);
  app.post('/api/dupcategory', category.findOrCreate)
}