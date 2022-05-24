const { Kafka } = require("kafkajs")
const kafka = new Kafka({
    clientID: 'my-app',
    brokers: ['kafka:9092']
});

const login = async(usuario, password) => {
    const producer = kafka.producer()
    await producer.connect()
    try {
        await producer.send({
            topic: 'login',
            messages: [{
                value: JSON.stringify({
                    usuario: usuario,
                    password: password,
                    fecha: new Date(Date.now()),
                })
            }, ],
        })
    } catch (err) {
        console.error("error " + err)
    }
}

const usuario = (usuario) => {
    login(usuario).catch((err) => {
        console.error("error en el login: ", err)
    })
}

module.exports = { usuario, login };