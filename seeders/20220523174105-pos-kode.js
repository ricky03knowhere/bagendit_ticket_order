"use strict";

const { posKodeFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pos_kodes", posKodeFactory(15), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pos_kodes", null, {});
  },
};
