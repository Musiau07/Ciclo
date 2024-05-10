const express = require('express');
const userController = require("../controller/controller");
const user = require("../config/db");
const router = express.Router();

router.get('/', userController.getRoot); //rota raiz
router.get('/api/read', userController.listAllUsers);//listar todos os usuários 
router.get('/api/read/:id', userController.listByID);//listar usuário por id
router.post('/api/create', userController.createNewUser); //cadastrar novo usuario 
router.post('/api/validate', userController.login);//validar o login

module.exports = router;
