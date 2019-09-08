const express = require('express');
const router = express.Router();

var app = express();

// Router
app.use(router)

router.get('/message', function(req, res){
    res.send('Lista e mensajes')
})

router.post('/message', function(req, res){
    res.send('Mensaje agregado')
})

// app.use('/', function(req, res){
//     res.send('Hola')
// })

app.listen(3000)

console.log('La aplicacion esta escuchando en http://localhost:3000')