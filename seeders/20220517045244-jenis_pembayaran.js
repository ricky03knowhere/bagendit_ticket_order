const { jenisPembFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("jenis_pembayarans", jenisPembFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("jenis_pembayarans", null, {});
  },
};
