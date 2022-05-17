"use strict";

const { jenisTiketFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Jenis_tikets", jenisTiketFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jenis_tikets", null, {});
  },
};
