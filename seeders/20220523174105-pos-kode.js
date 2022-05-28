"use strict";

const { posKodeFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});*/
    await queryInterface.bulkInsert("pos_kode", posKodeFactory, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * azwait queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("pos_kode", null, {});
  },
};
