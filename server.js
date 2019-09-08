// Librerias
const express = require('express');
const bodyParser = require('body-parser')

const response = require('./network/response')

const router = express.Router();

// Server express
var app = express();

// BodyParse
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: false }))

// Router
app.use(router)

router.get('/message', function(req, res){
    console.log(req.headers)
    res.header({
        "custom-header": "new header"
    })
    response.success(req, res, 'list messages', 201)
})

router.post('/message', function(req, res){
    // res.send('Mensaje agregado')
    response.success(req, res, 'create message', 201)
})

router.delete('/message', function(req, res){
    console.log(req.query) // por url
    if(req.query.error == 'ok'){
        response.error(req, res, 'error simuldao', 400)
    } else{
        response.success(req, res, 'create message', 201)
    }
    response.success(req, res, 'delete message')
})

// app.use('/', function(req, res){
//     res.send('Hola')
// })

app.listen(3000)

console.log('La aplicacion esta escuchando en http://localhost:3000')