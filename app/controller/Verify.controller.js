const jwt = require('jsonwebtoken');
const config = require('../config')

function verify(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).json({
      auth: false,
      status: 'No se envió el Token'
    });
  };
  const decodificado = jwt.verify(token, config.secret);
  req.userid = decodificado.id;
  next();
}

module.exports = verify;