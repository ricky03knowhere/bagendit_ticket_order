'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Detail_pemesanans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_detail_pem: {
        type: Sequelize.INTEGER
      },
      id_pemesanan: {
        type: Sequelize.INTEGER
      },
      id_tiket: {
        type: Sequelize.INTEGER
      },
      id_loket: {
        type: Sequelize.INTEGER
      },
      tanggal_wisata: {
        type: Sequelize.DATE
      },
      jumlah_tiket: {
        type: Sequelize.INTEGER
      },
      total_harga: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Detail_pemesanans');
  }
};