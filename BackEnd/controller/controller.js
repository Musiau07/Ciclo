const clientController = require("../model/model");

const useController = {
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
        const { id, nome, email, senha } = req.body;

        try {
            const sql = await clientController.getByID(id)

            if (sql.length > 0) {
                res.status(401).json({ msg: "O ID ja esta cadastrado no DB" })
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

    registerNewClient: async (req, res) => {
        const { id, nome, email, senha } = req.body;

        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(401).json({ msg: "O email já está Cadastrado, Insira um email valido" })
            }
            else {
                await clientController.registerSenai(id, nome, email, senha);
                res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        }
        catch (erro) {
            console.log(error);
            res.status(500).json({ msg: "Ocorreu um erro durante o registro de usuários" });
        }
    },

    login: async (req, res) => {
        let { email, senha } = req.body;

        senha = senha.toString();

        try {
            const sql = await clientController.validadeLogin(email, senha);

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
    }
};

module.exports = useController;