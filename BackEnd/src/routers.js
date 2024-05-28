const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();


router.get("/", clientController.getRoot); //Rota raiz
router.get("/api/read", clientController.listAllUsers); //Listar tds os usuarios
router.get("/api/read/:id", clientController.listByID); // Listar por id
router.post("/api/create", clientController.createNewUser); //Cadastrar novo usuario
router.post("/api/validation", clientController.login);//Validar o login
router.post('/api/reset', clientController.getByEmailReset);//verificar o email de reset//
router.post('/api/resetPassword', clientController.resetPassword);//resetar a senha//


module.exports = router;