const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: process.env.DB_DIALECT, // es el motor de base de datos que estoy utilizando
  host: process.env.DB_HOST, // la direccion IP o DNS de mi servidor (opcional: 127.0.0.1)
  username: process.env.DB_USERNAME, //nombre de usuario por defecto es postgres
  password: process.env.DB_PASSWORD, //contraseña establecida durante la configuración del servicio
  database: process.env.DB_DATABASE, // nombre que se le pone a la bd durante su creacion en el simbolo del sistema (CMD)
  port: process.env.DB_PORT, //puerto donde se conecta la base de datos
  logging: false, // para que no nos muestre por terminal cada actualización que se le realice a la base de datos
});

module.exports = { db };
