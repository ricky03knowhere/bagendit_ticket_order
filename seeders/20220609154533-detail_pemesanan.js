"use strict";

const { detailPemesananFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "detail_pemesanans",
      detailPemesananFactory(800),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("detail_pemesanans", null, {});
  },
};
