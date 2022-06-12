"use strict";

const { pemesananFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pemesanans", pemesananFactory(500), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pemesanans", null, {});
  },
};
