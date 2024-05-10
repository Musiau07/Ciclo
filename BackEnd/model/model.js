const connection = require("../config/db");

const userModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM usuario")
            .catch(erro => console.log(erro));
        return result
    },

    getByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE email =?", [email])
            .catch(erro => console.log(erro));
        return result
    },

    registerUser: async (id, nome, email, senha) => {
        const [result] = await connection.query("INSERT INTO usuario VALUES(?,?,?,?)", [id, nome, email, senha])
        return result
    },
};

module.exports = userModel;