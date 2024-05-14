const connection = require("../config/db");

const useModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM usuario")
            .catch(err => console.log(err));
        return result
    },
<<<<<<< HEAD

    getByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM cadastro_login WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result
    },

    validateLogin: async (email, senha) => {
        const [result] = await connection.query("SELECT * FROM cadastro_login WHERE email=? AND senha=?", [email, senha])
=======
    getByID: async (id) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE id =?", [id])
            .catch(err => console.log(err));
        return result
    },
    registerUser: async (id, nome, email, senha) => {
        const [result] = await connection.query("INSERT INTO usuario values(?,?,?,?)", [id, nome, email, senha])
            .catch(err => console.log(erro));
        return result
    },
    getByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE email=?", [email])
>>>>>>> 233f09f4d3e01a90a75793b592cc9140645c26d3
            .catch(erro => console.log(erro));
        return result;
    },
<<<<<<< HEAD

    registerSenai: async (id, nome, sobrenome, email, senha) => {
        const [result] = await connection.query('INSERT INTO cadastro_login VALUES(?,?,?,?,?)', [id, nome, sobrenome, email, senha])
            .catch(erro => console.log(erro));
        return result
    },
};

module.exports = userModel;
=======
    validadeLogin: async (email, senha) => {
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
>>>>>>> 233f09f4d3e01a90a75793b592cc9140645c26d3
