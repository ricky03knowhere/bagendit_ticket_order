"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Objek_wisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Objek_wisata.hasMany(models.Tiket, { as: "tikets" });
    }
  }
  Objek_wisata.init(
    {
      id_obj_wisata: DataTypes.STRING,
      nama: DataTypes.STRING,
      lokasi: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Objek_wisata",
    }
  );
  return Objek_wisata;
};
