const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres', // es el motor de base de datos que estoy utilizando
  host: 'localhost', // la direccion IP o DNS de mi servidor (opcional: 127.0.0.1)
  username: 'postgres', //nombre de usuario por defecto es postgres
  password: 'root', //contraseña establecida durante la configuración del servicio
  database: 'blog_db', // nombre que se le pone a la bd durante su creacion en el simbolo del sistema (CMD)
  port: 5432, //puerto donde se conecta la base de datos
  logging: false, // para que no nos muestre por terminal cada actualización que se le realice a la base de datos
});

module.exports = { db };
