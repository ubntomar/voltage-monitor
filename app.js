const express = require('express')
const {
    getMessure
} = require('./controlers/ut.js');
const app = express()
const port = 3000
//comment from aws server! this is aded from server

app.get('/', (req, res) => {
    getMessure().then((result) => {
        if (result)
            res.send(JSON.stringify(result.data))
        else res.send('Tenemos problemas, no responde la conexion a la tarjeta en el cerro')
    })


})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
