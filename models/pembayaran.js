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
        foreignKey: "jenis_pembayaran_id",
        as: "jenis_pembayaran",
      });

      Pembayaran.hasOne(models.Pemesanan);
    }
  }
  Pembayaran.init(
    {
      pembayaran_id: DataTypes.STRING,
      jenis_pembayaran_id: DataTypes.STRING,
      kode_pembayaran: DataTypes.INTEGER,
      tanggal_bayar: DataTypes.DATE,
      img_barcode: DataTypes.STRING,
      status: DataTypes.ENUM("unpaid", "paid"),
    },
    {
      sequelize,
      modelName: "Pembayaran",
      underscored: true
    }
  );
  return Pembayaran;
};
