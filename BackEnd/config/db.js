//incluir biblioteca de conexão
const mysql= require("mysql2/promise");
//criar conexão com banco de dados 
const user = mysql.createPool({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "ciclo"
});
module.exports = user;