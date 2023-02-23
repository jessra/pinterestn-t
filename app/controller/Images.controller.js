


// const path = require('path');
// const { fileURLToPath } = require('url');
// const { create } = require('./Publication.controller');

// let name = '';
// const _filename = fileURLToPath(meta.url);
// const _dirname = path.dirname(_filename);

// const storage = multer.diskStorage({
//   destination: path.join(_dirname, '../images'),
//   filename: (req, file, cb) => {
//     name = `${Date.now()}-${file.originalname}`;
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });
// const upload2 = upload.single('image');
// module.export = upload2;

// const uploadFile = (req, res) => {
//   const head = req.body.head;
//   const description = req.body.description;
//   const img = name;
//   const category = req.body.categoria;
//   create(head, description, img, category);
// };
