"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pemesanans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pemesanan_id: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.STRING,
      },
      pembayaran_id: {
        type: Sequelize.STRING,
      },
      tanggal_pesan: {
        type: Sequelize.DATE,
      },
      total_harga: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.ENUM("pending", "complete", "cancelled"),
        defaultValue: "pending",
        allowNull: false,
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
    await queryInterface.dropTable("pemesanans");
  },
};