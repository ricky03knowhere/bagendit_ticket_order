"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pembayaran.belongsTo(models.Jenis_pembayaran, {
        foreignKey: "id_jenis_pem",
        as: "jenis_pembayaran",
      });

      Pembayaran.hasOne(models.Pemesanan);
    }
  }
  Pembayaran.init(
    {
      id_pembayaran: DataTypes.INTEGER,
      id_jenis_pemb: DataTypes.INTEGER,
      kode_pembayaran: DataTypes.INTEGER,
      tanggal_bayar: DataTypes.DATE,
      img_barcode: DataTypes.STRING,
      status: DataTypes.ENUM("unpaid", "paid"),
    },
    {
      sequelize,
      modelName: "Pembayaran",
    }
  );
  return Pembayaran;
};
