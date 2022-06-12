"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("detail_pemesanans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      detail_pemesanan_id: {
        type: Sequelize.STRING,
      },
      pemesanan_id: {
        type: Sequelize.INTEGER,
      },
      tiket_id: {
        type: Sequelize.INTEGER,
      },
      tanggal_wisata: {
        type: Sequelize.DATE,
      },
      jumlah_tiket: {
        type: Sequelize.INTEGER,
      },
      total_harga: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("detail_pemesanans");
  },
};
