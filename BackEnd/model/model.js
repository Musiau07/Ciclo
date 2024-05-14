const connection = require("../config/db");

const useModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM usuario")
            .catch(err => console.log(erro));
        return result
    },
    getByID: async (id) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE id =?", [id])
            .catch(err => console.log(erro));
        return result
    },
    registerUser: async (id, nome, email, senha) => {
        const [result] = await connection.query("INSERT INTO usuario values(?,?,?,?)", [id, nome, email, senha])
            .catch(err => console.log(erro));
        return result
    },
    getByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result;
    },
    validateLogin: async (email, senha) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE email=? AND senha=?", [email, senha])
            .catch(erro => console.log(erro));
        return result;
    },
    registernNewClient: async (id, nome, email, senha) => {
        const [result] = await connection.query("INSERT INTO usuario values(?,?,?,?)", [id, nome,  email, senha])
            .catch(erro => console.log(erro));
        return result;
    }

};

module.exports = useModel;