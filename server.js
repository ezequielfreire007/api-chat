// Librerias
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

// Servidor express
var app = express();

// BodyParse
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: false }))

// Router
app.use(router)

router.get('/message', function(req, res){
    res.send('Lista e mensajes')
})

router.post('/message', function(req, res){
    res.send('Mensaje agregado')
})

router.delete('/message', function(req, res){
    console.log(req.query) // por url
    console.log(req.body) // por form
    res.send(`Mensaje ${req.body.text} borrado`)
})

// app.use('/', function(req, res){
//     res.send('Hola')
// })

app.listen(3000)

console.log('La aplicacion esta escuchando en http://localhost:3000')