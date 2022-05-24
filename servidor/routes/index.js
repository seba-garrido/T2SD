const express = require("express")
const { Kafka } = require("kafkajs")
const { Router } = require("express")
const { bloqueados } = require("./controlador/bloqueo");
const { consume } = require("./controlador/controlador");
const app = express();
const router = Router()


//probando la api
app.use(router.get('/', (req, res) => {
    res.send('Hola la api esta ejecutandose, esto es de prueba para el servidor');
}))

//Usando a bloquear
app.use(router.get('/bloqueo', (req, res) => {
    const respuesta = {
        usuarios_bloqueados: bloqueados,
    }
    res.send(respuesta);
}))

//Corriendo el servidor
app.listen(3001, () => {
    console.log(`API CORRIENDO EN: http://localhost:3001.`)
});