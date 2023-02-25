const jwt = require('jsonwebtoken');
const config = require('../config')

function verify(req, res, next) {
  console.log(req.headers.authorization)
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      auth: false,
      err: 'No se envió el Token'
    });
  };
  const decodificado = jwt.verify(token, config.secret);
  console.log(decodificado)
  if (Date.now() > decodificado.exp) {
    res.json({ err: 'El tiempo ya expiró' });
  } else {
    req.userid = decodificado.id;
    next();
  }
}

module.exports = verify;