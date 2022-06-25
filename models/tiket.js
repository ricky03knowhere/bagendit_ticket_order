"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tiket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tiket.hasMany(models.Detail_pemesanan);

      Tiket.belongsTo(models.Jenis_tiket, {
        foreignKey: "jenis_tiket_id",
        as: "jenis_tiket",
      });

      Tiket.belongsTo(models.Loket);
    }
  }
  Tiket.init(
    {
      tiket_id: DataTypes.STRING,
      jenis_tiket_id: DataTypes.INTEGER,
      loket_id: DataTypes.INTEGER,
      stok: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tiket",
      underscored: true,
    }
  );
  return Tiket;
};
