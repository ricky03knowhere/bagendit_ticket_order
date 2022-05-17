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
      Tiket.belongsTo(models.Detail_pemesanan);

      Tiket.belongsTo(models.Jenis_tiket, {
        foreignKey: "id_jenis_tiket",
        as: "jenis_tiket",
      });

      Tiket.belongsTo(models.Loket, {
        foreignKey: "id_loket",
        as: "tiket_loket",
      });
    }
  }
  Tiket.init(
    {
      id_tiket: DataTypes.STRING,
      id_jenis_tiket: DataTypes.INTEGER,
      id_loket: DataTypes.INTEGER,
      stok: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tiket",
    }
  );
  return Tiket;
};
