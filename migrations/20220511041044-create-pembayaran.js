"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pembayarans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_pembayaran: {
        type: Sequelize.INTEGER,
      },
      id_jenis_pemb: {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pembayarans");
  },
};
