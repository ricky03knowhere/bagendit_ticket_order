"use strict";

const { tiketFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tikets", tiketFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tikets", null, {});
  },
};
