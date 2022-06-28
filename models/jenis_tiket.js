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
      Jenis_tiket.hasMany(models.Tiket);
      //   Jenis_tiket.belongsTo(models.Objek_wisata, {
      //     foreignKey: "id_obj_wisata",
      //     through: "objek_wisata",
      //   });
    }
  }
  Jenis_tiket.init(
    {
      jenis_tiket_id: DataTypes.INTEGER,
      nama: DataTypes.STRING,
      harga: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Jenis_tiket",
      underscored: true
    }
  );
  return Jenis_tiket;
};
