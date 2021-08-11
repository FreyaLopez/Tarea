const express = require('express')
const app1 = express()
const port = 3000

app1.get('/', (req,res) => {
    res.send('Hola mundo')
})

app1.listen(port,() => {
    console.log(`Servidor está escuchando en el puerto: ${port}`)
})