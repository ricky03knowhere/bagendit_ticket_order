"use strict";
const { Model } = require("sequelize");
const jenis_tiket = require("./jenis_tiket");
const objek_wisata = require("./objek_wisata");
module.exports = (sequelize, DataTypes) => {
  class Tiket_wisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      jenis_tiket.belongsToMany(objek_wisata, { through: Tiket_wisata });
      objek_wisata.belongsToMany(jenis_tiket, { through: Tiket_wisata });
    }
  }
  Tiket_wisata.init(
    {
      id_jenis_tiket: {
        type: DataTypes.INTEGER,
        references: {
          model: jenis_tiket,
          key: "id",
        },
      },
      id_obj_wisata: {
        type: DataTypes.INTEGER,
        references: {
          model: objek_wisata,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Tiket_wisata",
    }
  );
  return Tiket_wisata;
};
