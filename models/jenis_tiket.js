"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Jenis_tiket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jenis_tiket.hasMany(models.Tiket, { as: "tiket_type" });
      //   Jenis_tiket.belongsTo(models.Objek_wisata, {
      //     foreignKey: "id_obj_wisata",
      //     through: "objek_wisata",
      //   });
    }
  }
  Jenis_tiket.init(
    {
      id_jenis_tiket: DataTypes.INTEGER,
      nama: DataTypes.STRING,
      harga: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Jenis_tiket",
    }
  );
  return Jenis_tiket;
};
