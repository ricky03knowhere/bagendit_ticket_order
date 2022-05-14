"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id_user: 24144,
          kode_pos: 43111,
          email: "levi07@gmail.com",
          password: "admin",
          is_admin: 1,
          nama_lengkap: "Levi Ackerman",
          no_telp: "085203498203",
          alamat: "Paradise Island",
          photo: "levi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_user: 849824,
          kode_pos: 749232,
          email: "armin@gmail.com",
          password: "admin",
          is_admin: 1,
          nama_lengkap: "Armin Arlelt",
          no_telp: "085203498203",
          alamat: "Paradise Island",
          photo: "armin.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
