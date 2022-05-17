const { getRandomNumber, getRandRangeNum } = require("../utils/getRandomInt");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

faker.locale = "id_ID";

exports.userFactory = (size) =>
  [...Array(size)].map((user) => ({
    id_user: getRandomNumber(8),
    kode_pos: faker.address.zipCode(),
    email: faker.internet.email(),
    password: bcrypt.hashSync("admin", 10),
    is_admin: 1,
    nama_lengkap: faker.name.findName(),
    no_telp: faker.phone.phoneNumber(),
    alamat: faker.address.streetAddress(true),
    photo: faker.internet.avatar(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

exports.loketFactory = [...Array(3)].map((loket, i) => ({
  id_loket: i + 1,
  nama: `loket-0${i + 1}`,
  lokasi: faker.address.streetAddress(true),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

const tiket = [
  ["A", 1, 1, getRandRangeNum(300, 800)],
  ["A", 1, 2, getRandRangeNum(300, 800)],
  ["A", 1, 3, getRandRangeNum(300, 800)],
  ["D", 2, 1, getRandRangeNum(500, 800)],
  ["D", 2, 2, getRandRangeNum(500, 800)],
  ["D", 2, 3, getRandRangeNum(500, 800)],
  ["E", 3, 1, getRandRangeNum(50, 300)],
  ["E", 3, 2, getRandRangeNum(50, 300)],
  ["E", 3, 3, getRandRangeNum(50, 300)],
];

exports.tiketFactory = tiket.map((item, i) => ({
  id_tiket: `${item[0]}-${getRandomNumber(12)}-L0${item[2]}`,
  id_jenis_tiket: item[1],
  id_loket: item[2],
  stok: item[3],
  createdAt: new Date(),
  updatedAt: new Date(),
}));

exports.jenisTiketFactory = [
  {
    id_jenis_tiket: 1,
    nama: "anak-anak",
    harga: 30000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 2,
    nama: "dewasa",
    harga: 50000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 3,
    nama: "eksklusive",
    harga: 100000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const objek_wisata = [
  "mesjid al-ahzar",
  "kantin bagendit",
  "bagendit store",
  "taman main anak",
  "photo spots",
  "taman anggrek",
  "sport area",
  "danau eceng",
  "jelajah danau",
  "wisata alam bagendit",
];

exports.objWisataFactory = objek_wisata.map((wisata, i) => ({
  id_obj_wisata: `00${i + 1}-${faker.address.cardinalDirection(true)}`,
  nama: wisata,
  lokasi: faker.address.cardinalDirection(),
  photo: faker.system.commonFileName("jpg"),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

exports.tiketWisataFactory = [
  {
    id_jenis_tiket: 1,
    id_obj_wisata: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 1,
    id_obj_wisata: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 1,
    id_obj_wisata: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 1,
    id_obj_wisata: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id_jenis_tiket: 2,
    id_obj_wisata: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 2,
    id_obj_wisata: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 2,
    id_obj_wisata: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 2,
    id_obj_wisata: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 2,
    id_obj_wisata: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 2,
    id_obj_wisata: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 2,
    id_obj_wisata: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id_jenis_tiket: 3,
    id_obj_wisata: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 3,
    id_obj_wisata: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 3,
    id_obj_wisata: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 3,
    id_obj_wisata: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 3,
    id_obj_wisata: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 3,
    id_obj_wisata: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 3,
    id_obj_wisata: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 3,
    id_obj_wisata: 8,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 3,
    id_obj_wisata: 9,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id_jenis_tiket: 3,
    id_obj_wisata: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const jenis_pembayaran = [
  ["bca", "bank"],
  ["bri", "bank"],
  ["mandiri", "bank"],
  ["loket", "cash"],
  ["alfamart", "cash"],
  ["dana", "e-wallet"],
  ["ovo", "e-wallet"],
  ["go-pay", "e-wallet"],
];

exports.jenisPembFactory = jenis_pembayaran.map((item, i) => ({
  id_jenis_pemb: i + 1,
  nama_pemb: item[0],
  metode_pemb: item[1],
  createdAt: new Date(),
  updatedAt: new Date(),
}));
