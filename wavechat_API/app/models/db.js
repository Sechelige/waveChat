const mysql = require('mysql');
const dbConfig = require('../config/db.config.js');

//creation d'une connexion à la base de données
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//ouverture de la connexion à la base de données
connection.connect(error => {
    if (error) throw error;
    console.log("Connection à la base de données réussie");
});

module.exports = connection;