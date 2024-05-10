const connection = require("../config/db");

const userModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM usuario")
            .catch(erro => console.log(erro));
        return result
    },

    getByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM cadastro_login WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result
    },

    validateLogin: async (email, senha) => {
        const [result] = await connection.query("SELECT * FROM cadastro_login WHERE email=? AND senha=?", [email, senha])
            .catch(erro => console.log(erro));
        return result
    },

    registerSenai: async (id, nome, sobrenome, email, senha) => {
        const [result] = await connection.query('INSERT INTO cadastro_login VALUES(?,?,?,?,?)', [id, nome, sobrenome, email, senha])
            .catch(erro => console.log(erro));
        return result
    },
};

module.exports = userModel;