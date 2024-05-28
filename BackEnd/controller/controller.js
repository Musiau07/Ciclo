const { json } = require("express");
const clientController = require("../model/model");

const userController = {
    //Route root
    getRoot: async (req, res) => {
        res.status(200).json({ msg: "The API is running!!!" })
    },

    //Controller para listar todos os usuarios de banco
    listAllUsers: async (req, res) => {
        try {
            const clients = await clientController.getAllUsers();
            res.status(200).json(clients);
        }
        catch (erro) {
            res.status(500).json({ error: "Erro ao obter a lista de usuarios" })
        }
    },

    //Controller list by id
    listByID: async (req, res) => {
        try {
            const sql = await clientController.getByID(req.params.id);

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
    //Criar usuario
    createNewUser: async (req, res) => {
        let { id, nome, email, senha } = req.body;

        email = email.toLowerCase();

        try {
            if(!email.includes('@')){
                return res.status(400).json({msg: "O e-mail fornecido é invalido"})
            }
            
            const sql = await clientController.getByEmail(email)

            if (sql.length > 0) {
                res.status(401).json({ msg: "O email já está cadastrado no DB" })
            }
            else {
                await clientController.registerUser(id, nome, email, senha);
                res.status(201).json({ msg: "Usuario cadastrado com sucesso" })

            }
        }
        catch (error) {
            return error
        }
    },

    login: async (req, res) => {
        let { email, senha } = req.body;

        senha = senha.toString();

        try {
            const sql = await clientController.validateLogin(email, senha);

            if (sql.length > 0) {
                res.status(200).json({ msg: "Email e senha validados com sucesso!!!" });
            }
            else {
                res.status(401).json({ msg: "Email ou senha incorretos" });
            }
        }
        catch (error) {
            if (error) {
                res.status(500).json(error);
            }
        }
    },

    getByEmailReset: async (req, res) => {
        let { email } = req.body

        email = email.toLowerCase();

        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(200).json({ msg: 'sucesso' })
            }
            else {
                res.status(401).json({ msg: 'email não cadastrado no bd' });
            }
        }
        catch (error) {
            if (error) {
                res.status(500).json(error);
            }
        }
    },

    resetPassword: async (req, res) => {
        let { email, senha } = req.body

        email = email.toLowerCase();

        try {
            await clientController.updatePassword(email, senha);
            res.status(200).json({ msg: 'senha atualizada com sucesso' });
        }
        catch (error) {
            console.log('erro ao redefinir a senha')
            res.status(500).json({ msg: 'erro no servidor' })
        }
    },
};

module.exports = userController;