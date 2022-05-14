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
      Detail_pemesanan.hasMany(models.Pemesanan, { as: "pemesanans" });
      Detail_pemesanan.hasMany(models.Tiket, { as: "bought_tikets" });
      Detail_pemesanan.belongsToMany(models.Loket, { through: "lokets" });
    }
  }
  Detail_pemesanan.init(
    {
      id_detail_pem: DataTypes.INTEGER,
      id_pemesanan: DataTypes.INTEGER,
      id_tiket: DataTypes.INTEGER,
      id_loket: DataTypes.INTEGER,
      tanggal_wisata: DataTypes.DATE,
      jumlah_tiket: DataTypes.INTEGER,
      total_harga: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Detail_pemesanan",
    }
  );
  return Detail_pemesanan;
};
