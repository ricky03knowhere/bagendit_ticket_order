"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("jenis_tikets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      jenis_tiket_id: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
      },
      harga: {
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
    await queryInterface.dropTable("jenis_tikets");
  },
};
