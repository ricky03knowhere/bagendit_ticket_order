"use strict";

const { tiketFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tikets", tiketFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tikets", null, {});
  },
};
