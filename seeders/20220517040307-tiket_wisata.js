"use strict";

const { tiketWisataFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tiket_wisatas", tiketWisataFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tiket_wisatas", null, {});
  },
};
