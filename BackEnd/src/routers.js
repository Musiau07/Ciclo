<<<<<<< HEAD
const express = require('express');
const userController = require("../controller/controller");
=======
const express = require("express");
const clientController = require("../controller/controller");
>>>>>>> 233f09f4d3e01a90a75793b592cc9140645c26d3
const router = express.Router();

router.get("/", clientController.getRoot); //Rota raiz
router.get("/api/read", clientController.listAllUsers); //Listar tds os usuarios
router.get("/api/read/:id", clientController.listByID); // Listar por id
router.post("/api/create", clientController.createNewUser); //Cadastrar novo usuario
router.post("/api/registerNewClient", clientController.registerNewClient);//Cadastrar o usuario
router.post("/api/validation", clientController.login);//Validar o login

module.exports = router;