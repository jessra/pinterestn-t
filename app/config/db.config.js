const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.Users = require('../models/users.js')(sequelize, Sequelize);
db.Publication = require('../models/publication.js')(sequelize, Sequelize);
db.Fav = require('../models/fav.js')(sequelize, Sequelize);
db.Category = require('../models/category.js')(sequelize, Sequelize);


module.exports = db;