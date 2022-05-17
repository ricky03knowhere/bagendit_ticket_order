const { jenisPembFactory } = require("../factories/dataFactory");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Jenis_pembayarans", jenisPembFactory, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jenis_pembayarans", null, {});
  },
};
