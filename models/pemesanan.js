"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pemesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pemesanan.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
      Pemesanan.belongsTo(models.Pembayaran, {
        foreignKey: "pembayaran_id",
        as: "pembayaran",
      });
      Pemesanan.hasMany(models.Detail_pemesanan);
    }
  }
  Pemesanan.init(
    {
      pemesanan_id: DataTypes.STRING,
      user_id: DataTypes.STRING,
      pembayaran_id: DataTypes.STRING,
      tanggal_pesan: DataTypes.DATE,
      total_harga: DataTypes.INTEGER,
      status: DataTypes.ENUM("pending", "complete", "cancelled"),
    },
    {
      sequelize,
      modelName: "Pemesanan",
      underscored: true,
    }
  );
  return Pemesanan;
};
