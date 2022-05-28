"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tikets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
     tiket_id: {
        type: Sequelize.STRING,
      },
     jenis_tiket_id: {
        type: Sequelize.INTEGER,
      },
     loket_id: {
        type: Sequelize.INTEGER,
      },
      stok: {
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
    await queryInterface.dropTable("tikets");
  },
};
