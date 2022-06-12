"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pembayarans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pembayaran_id: {
        type: Sequelize.STRING,
      },
      jenis_pembayaran_id: {
        type: Sequelize.INTEGER,
      },
      kode_pembayaran: {
        type: Sequelize.INTEGER,
      },
      tanggal_bayar: {
        type: Sequelize.DATE,
      },
      img_barcode: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM("unpaid", "paid"),
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
    await queryInterface.dropTable("pembayarans");
  },
};
