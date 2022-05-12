"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Kode_pos, {
        foreignKey: "kode_pos",
        as: "kode_pos",
      });

      User.hasMany(models.Pemesanan, {as: 'pemesanans'})
    }
  }
  User.init(
    {
      id_user: DataTypes.INTEGER,
      kode_pos: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      is_admin: DataTypes.INTEGER,
      nama_lengkap: DataTypes.STRING,
      no_telp: DataTypes.STRING,
      alamat: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
