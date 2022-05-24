const express = require("express");
const { Router } = require("express");
const { usuario } = require("./controlador/controlador");
const app = express();
const router = Router();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//usando el login
app.use(router.post('/login', (req, res) => {
    const { user, pass } = req.body;
    const resp = usuario(req.body);
    res.status(200).send({...req.body, message: resp });
}));

//corriendo el cliente
app.listen(3000, () => {
    console.log("Cliente corriendo en el puerto 3000");
});