const clientController = require("../model/model");
const userController = {

    // route root
    getRoot: async (req, res) => {
        res.status(200).json({ msg: "the API is running!!!" })
    },

    // controller para listar todos os usuarios do banco:
    listAllUsers: async (req, res) => {
        try {
            const clients = await clientController.getAllUsers();
            res.status(200).json(clients);
        }
        catch (error) {
            res.status(500).json({ error: "erro ao obter a lista de usuarios :(" })
        }
    },

    // listar usuarios por ID:
    listByID: async (req, res) => {
        try {
            const sql = await clientController.getById(req.params.id);

            if (sql.length > 0) {
                res.status(200).json(sql)
            }
            else {
                res.status(401).json({ msg: "não existe registro no banco com este ID :(" })
            }
        }
        catch (error) {
            return error
        }
    },

    // criar um novo usuario:
    createNewUser: async (req, res) => {
        const { id, nome, sobrenome, idade } = req.body;

        try {
            const sql = await clientController.getById(id);

            if (sql.length > 0) {
                res.status(401).json({ msg: "o ID ja está cadastrado no DB" })
            }
            else {
                await clientController.registerUser(id, nome, sobrenome, idade);
                res.status(201).json({ msg: "usuario cadastrado com sucesso :)" });
            }
        }
        catch (error) {
            return error
        }
    },

    // cadastrar um novo usuario no banco:
    registerSenai: async (req, res) => {
        const { id, nome, sobrenome, email, senha } = req.body;

        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(401).json({ msg: "o email ja esta cadastrado na base de dados, insira um email diferente!" })
            }
            else {
                await clientController.registerSenai(id, nome, sobrenome, email, senha);
                res.status(201).json({ msg: "usuario cadastrado com sucesso" });
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
            const sql = await clientController.validateLogin(email, senha);

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