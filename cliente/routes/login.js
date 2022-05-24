const express = require("express")
const { Router } = require("express")
const { usuario } = require("./controlador/controlador");
const app = express();
const router = Router()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//probando la api
app.use(router.get('/', (req, res) => {
    res.send('Hola la api esta ejecutandose, esto es de prueba para el cliente');
}))

//Usando el login
app.use(router.post('/login', (req, res) => {
    const { user, pass } = req.body;
    // console.log(req.body)
    const resp = usuario(req.body);
    res.status(200).send({...req.body, message: resp })
}))

//Corriendo el cliente
app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
})