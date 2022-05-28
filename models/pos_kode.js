"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pos_kode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pos_kode.hasMany(models.User, { as: "visitors" });
    }
  }
  Pos_kode.init(
    {
      pos_kode_id: DataTypes.STRING,
      provinsi: DataTypes.STRING,
      kota: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      desa: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pos_kode",
      underscored: true,
    }
  );
  return Pos_kode;
};
