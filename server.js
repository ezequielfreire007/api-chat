// Librerias
const express = require('express');
const bodyParser = require('body-parser')

// const response = require('./network/response')
const router = require('./network/routes')
// Server express
var app = express();
// BodyParse
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: false }))

// Router
// app.use(router)
router(app)

// Archivos estaticos
app.use('/app', express.static('public'))

app.listen(3000)

console.log('La aplicacion esta escuchando en http://localhost:3000')