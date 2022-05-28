"use strict";

const { tiketWisataFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tiket_wisatas", tiketWisataFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tiket_wisatas", null, {});
  },
};
