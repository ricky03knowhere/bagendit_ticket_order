'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pos_kode', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pos_kode_id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.STRING
      },
      provinsi: {
        type: Sequelize.STRING
      },
      kota: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      desa: {
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
    await queryInterface.dropTable('pos_kode');
  }
};