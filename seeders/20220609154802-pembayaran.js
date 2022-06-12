"use strict";

const { pembayaranFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pembayarans", pembayaranFactory(500), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pembayarans", null, {});
  },
};
