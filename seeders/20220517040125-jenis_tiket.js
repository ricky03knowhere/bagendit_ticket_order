"use strict";

const { jenisTiketFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("jenis_tikets", jenisTiketFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("jenis_tikets", null, {});
  },
};
