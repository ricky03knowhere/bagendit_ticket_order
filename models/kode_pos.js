"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kode_pos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kode_pos.hasMany(models.User, { as: "visitors" });
    }
  }
  Kode_pos.init(
    {
      ode_pos: DataTypes.INTEGER,
      provinsi: DataTypes.STRING,
      kota: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      desa: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Kode_pos",
    }
  );
  return Kode_pos;
};
