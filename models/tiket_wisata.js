"use strict";
const { Model } = require("sequelize");
const Jenis_tiket = require("./jenis_tiket");
const Objek_wisata = require("./objek_wisata");
module.exports = (sequelize, DataTypes) => {
  class Tiket_wisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Jenis_tiket.belongsToMany(models.Objek_wisata, {
        through: "Tiket_wisata",
      });
      models.Objek_wisata.belongsToMany(models.Jenis_tiket, {
        through: "Tiket_wisata",
      });
    }
  }
  Tiket_wisata.init(
    {
      jenis_tiket_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Jenis_tiket,
          key: "id",
        },
      },
      objek_wisata_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Objek_wisata,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Tiket_wisata",
      underscored: true
    }
  );
  return Tiket_wisata;
};
