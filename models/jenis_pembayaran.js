"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Jenis_pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jenis_pembayaran.hasMany(models.Pembayaran, { as: "pembayarans" });
    }
  }
  Jenis_pembayaran.init(
    {
      id_jenis_pemb: DataTypes.INTEGER,
      nama_pemb: DataTypes.STRING,
      metode_pemb: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Jenis_pembayaran",
    }
  );
  return Jenis_pembayaran;
};
