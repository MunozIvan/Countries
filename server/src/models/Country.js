const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3), 
      allowNull: false,
      primaryKey: true,
      validate: {
        is: /^[a-zA-Z]{3}$/ // longitud de 3 caracteres SOLO LETRAS
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  },{
    timestamps:false
    });
};