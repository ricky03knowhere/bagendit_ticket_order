'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jenis_pembayarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jenis_pembayaran_id: {
        type: Sequelize.STRING
      },
      nama_pemb: {
        type: Sequelize.STRING
      },
      metode_pemb: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jenis_pembayarans');
  }
};