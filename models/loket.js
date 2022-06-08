"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Loket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Loket.hasMany(models.Tiket);
    }
  }
  Loket.init(
    {
      loket_id: DataTypes.INTEGER,
      nama: DataTypes.STRING,
      lokasi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Loket",
      underscored: true
    }
  );
  return Loket;
};
