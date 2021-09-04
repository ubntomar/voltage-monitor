const express = require('express')
const {
    getMessure
} = require('./ut.js');
const app = express()
const port = 3000
<<<<<<< HEAD
//Comment
//
//comment from aws server! this is aded from server
=======
>>>>>>> 0e79056037da6ae7aee33098bc77982a643411b5

//from laptop



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
