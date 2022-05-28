"use strict";

const { objWisataFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("objek_wisatas", objWisataFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("objek_wisatas", null, {});
  },
};
