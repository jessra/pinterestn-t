module.exports = function(app) {
  const users = require('../controller/Users.controller.js');
  const publication = require('../controller/Publication.controller.js');
  const category = require('../controller/Category.controller.js');
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

  // Users
  app.get('/api/users', users.findAll);
  app.post('/api/aggusers', upload.single('img'), function (req, res) {
    console.log(req.file);
    users.create(req, name, res)
  });

  // Publications
  app.get('/api/publications', publication.findAll);
  app.post('/api/aggpublications', upload.single('file'), function (req, res) {
    console.log(req.file);
    publication.create(req, name, res)
  });
  app.post('/api/publication', publication.findOne)

  // Categorys
  app.get('/api/category', category.findAll);
  app.post('/api/dupcategory', category.findOrCreate)
}