var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

require('./app/route/routes.js')(app);

// Create a Server
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.addre
  console.log("App listening at http://%s:%s", host, port)
})