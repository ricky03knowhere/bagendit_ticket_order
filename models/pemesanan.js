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
      Pemesanan.belongsTo(models.User, { foreignKey: "id_user", as: "user" });
      Pemesanan.belongsTo(models.Pembayaran, {
        foreignKey: "id_pembayaran",
        as: "pembayaran",
      });
      Pemesanan.belongsTo(models.Detail_pemesanan);
    }
  }
  Pemesanan.init(
    {
      id_pemesanan: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      id_pembayaran: DataTypes.INTEGER,
      tanggal_pesan: DataTypes.DATE,
      total_harga: DataTypes.INTEGER,
      status: DataTypes.ENUM("pending", "complete", "cancelled"),
    },
    {
      sequelize,
      modelName: "Pemesanan",
    }
  );
  return Pemesanan;
};
