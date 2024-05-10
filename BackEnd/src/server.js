const express = require("express");
const router = require("./routers")
const user = require("../config/db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(router);

app.use((req, res, next) => {
    //qualquer endereço pode realizar requisição:
    res.header("Acess-Control-Allow-Origin", "*");

    //tipos de métodos que a API aceita:
    res.header("Acess-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    //permitir o envio de dados para a API:
    res.header("Acess-Control-Allow-Headers", "Content-Type");

    //executar o cors:
    app.use(cors());

    //quando não houver erro deve continuar o processamento:
    next();
});

user.query("select 1").then(() => {
    console.log("connection sucess")
    app.listen(8085, function () {
        console.log("Servidor rodando na URL: http://localhost:8085")
    });
})
.catch(erro => console.log("connection failed \n" + erro));

