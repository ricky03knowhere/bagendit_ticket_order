"use strict";

const { objWisataFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Objek_wisatas", objWisataFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Objek_wisatas", null, {});
  },
};
