const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const User = db.define('users', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwordChangedAt: {
    // para almacenar la fecha y hora en la que un usuario cambió su contraseña por última vez. con el fin de brindar seguridad se puede implementar lógica para obligar a los usuarios a cambiar su contraseña después de un cierto período de tiempo, como una política de seguridad.
    type: DataTypes.DATE,
    allowNull: true,
  },
  profileImgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'users/1691793732499-Husky and sunset.jpg',
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    allowNull: false,
    defaultValue: 'user',
  },
  status: {
    type: DataTypes.ENUM('active', 'disabled'),
    allowNull: false,
    defaultValue: 'active',
  },
});

module.exports = User;
