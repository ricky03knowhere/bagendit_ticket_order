"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Detail_pemesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Detail_pemesanan.belongsTo(models.Pemesanan);
      Detail_pemesanan.belongsTo(models.Tiket);
      Detail_pemesanan.belongsToMany(models.Loket, { through: "lokets" });
    }
  }
  Detail_pemesanan.init(
    {
      detail_pemesanan_id: DataTypes.STRING,
      pemesanan_id: DataTypes.INTEGER,
      tiket_id: DataTypes.INTEGER,
      tanggal_wisata: DataTypes.DATE,
      jumlah_tiket: DataTypes.INTEGER,
      total_harga: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Detail_pemesanan",
      underscored: true
    }
  );
  return Detail_pemesanan;
};
