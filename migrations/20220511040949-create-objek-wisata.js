"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("objek_wisatas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      objek_wisata_id: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
      },
      lokasi: {
        type: Sequelize.STRING,
      },
      photo: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("objek_wisatas");
  },
};
