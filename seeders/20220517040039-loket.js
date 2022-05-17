"use strict";

const { loketFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Lokets", loketFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Lokets", null, {});
  },
};
