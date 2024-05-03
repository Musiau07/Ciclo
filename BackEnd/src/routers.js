const express = require('express');
const clientController = require("../controller/controller");
const router = express.Router();

router.get('/', clientController.getRoot); //rota raiz
router.get('/api/read', clientController.listAllUsers);//listar todos os usuários 
router.get('/api/read/:id', clientController.listByID);//listar usuário por id
router.post('/api/create', clientController.createNewUser); //cadastrar novo usuario 
router.post('/api/registersenai', clientController.registerSenai);//cadastrar um novo usuario
router.post('/api/validate', clientController.login);//validar o login
//router.delete('/api/deletar/:id', clientController.deleteUser);//Deletar usuário
//router.put('/api/atualizar/julia/nery/:id', clientController.updateUser);//atualizar usuário


module.exports = router;
