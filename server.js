const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('Prueba server')
})
app.listen(5000, function () {
  console.log('El servidor esta corriendo correctamente');
})