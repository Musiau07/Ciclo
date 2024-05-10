const { json } = require("express");
const userController = require("../model/model");
const userController = {

    // route root
    getRoot: async (req, res) => {
        res.status(200).json({ msg: "the API is running!!!" })
    },

    // controller para listar todos os usuarios do banco:
    listAllUsers: async (req, res) => {
        try {
            const user = await userController.getAllUsers();
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de usuários" })
        }
    },

    // listar usuarios por email:
    listByID: async (req, res) => {
        try {
            const sql = await userController.getById(req.params.email);

            if (sql.length > 0) {
                res.status(200).json(sql)
            }
            else {
                res.status(401).json({ msg: "Não existe registro no banco com este ID" })
            }
        }
        catch (error) {
            return error
        }
    },

    // criar um novo usuario:
    createNewUser: async (req, res) => {
        const { id, nome, email, senha } = req.body;

        try {
            const sql = await userController.getByEmail(email);

            if (sql.length > 0) {
                res.status(401).json({ msg: "O email já esta cadastrado no Banco de Dados" })
            }
            else {
                await userController.registerUser(id, nome, email, senha);
                res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ msg: "ocorreu um erro durante o registro do usuario" })
        }
    },

    login: async (req, res) => {
        const { email, senha } = req.body;

        try {
            const sql = await userController.validateLogin(email, senha);

            if (sql.length > 0) {
                res.status(200).json({ msg: "email e senha validados com sucesso!" })
            }
            else {
                res.status(401).json({ msg: "email ou senha incorretos" });
            }
        }
        catch (error) {
            if (error) {
                res.status(500).json(error);
            }
        }
    }
};

module.exports = userController;