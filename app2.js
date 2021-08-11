const express = require('express');
//const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/',function(req,res) {
    res.send('API de productos v1.0')
});

//consulta
app.get('/producto', function(req,res) {
    var dato = {id:1, nombre:'impresora', precio:500, stock:200}
    res.send(dato)
});

//crear
app.post('/producto',function(req,res) {
    mens = {mensaje : 'Producto creado correctamente'};
    console.log(req.body);
    if (!req.body.id || !req.body.nombre) {
        mens = {mensaje : 'Error, se requiere el id y el nombre'};
    }
    //aquí va el código para grabar BD
    res.status(201);
    res.send(mens)
});

app.put('/producto', function(req,res) {
    console.log(req.body);
    res.send('Actualizado ok')
});


app.listen(8001, () => {
    console.log('El servidor está inicializado en el puerto 8001')
});