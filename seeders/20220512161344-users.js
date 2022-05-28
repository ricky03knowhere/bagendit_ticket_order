"use strict";

const { userFactory } = require("../factories/dataFactory");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", userFactory(5), {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
