const { getRandomNumber, getRandRangeNum } = require("../utils/getRandomInt");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

faker.locale = "id_ID";

// let post_code = faker.address.zipCode();

exports.userFactory = (size) =>
  [...Array(size)].map((user) => ({
    user_id: getRandomNumber(8).toString(),
    pos_kode_id: '90029',
    email: faker.internet.email(),
    password: bcrypt.hashSync("admin", 10),
    is_admin: 1,
    nama_lengkap: faker.name.findName(),
    no_telp: faker.phone.phoneNumber(),
    alamat: faker.address.streetAddress(true),
    photo: faker.internet.avatar(),
    created_at: new Date(),
    updated_at: new Date(),
  }));

exports.posKodeFactory = [...Array(3)].map((kode, i) => ({
  pos_kode_id: faker.address.zipCode(),
  provinsi: faker.address.state(),
  kota: faker.address.cityName(),
  kecamatan: faker.address.cityName(),
  desa: faker.address.streetName(),
  created_at: new Date(),
  updated_at: new Date(),
}));

exports.loketFactory = [...Array(3)].map((loket, i) => ({
  loket_id: i + 1,
  nama: `loket-0${i + 1}`,
  lokasi: faker.address.streetAddress(true),
  created_at: new Date(),
  updated_at: new Date(),
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
  tiket_id: `${item[0]}-${getRandomNumber(12)}-L0${item[2]}`,
  jenis_tiket_id: item[1],
  loket_id: item[2],
  stok: item[3],
  created_at: new Date(),
  updated_at: new Date(),
}));

exports.jenisTiketFactory = [
  {
    jenis_tiket_id: 1,
    nama: "anak-anak",
    harga: 30000,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 2,
    nama: "dewasa",
    harga: 50000,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 3,
    nama: "eksklusive",
    harga: 100000,
    created_at: new Date(),
    updated_at: new Date(),
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
  objek_wisata_id: `00${i + 1}-${faker.address.cardinalDirection(true)}`,
  nama: wisata,
  lokasi: faker.address.cardinalDirection(),
  photo: faker.system.commonFileName("jpg"),
  created_at: new Date(),
  updated_at: new Date(),
}));

exports.tiketWisataFactory = [
  {
    jenis_tiket_id: 1,
    objek_wisata_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 1,
    objek_wisata_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 1,
    objek_wisata_id: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 1,
    objek_wisata_id: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },

  {
    jenis_tiket_id: 2,
    objek_wisata_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 2,
    objek_wisata_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 2,
    objek_wisata_id: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 2,
    objek_wisata_id: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 2,
    objek_wisata_id: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 2,
    objek_wisata_id: 6,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 2,
    objek_wisata_id: 7,
    created_at: new Date(),
    updated_at: new Date(),
  },

  {
    jenis_tiket_id: 3,
    objek_wisata_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 3,
    objek_wisata_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 3,
    objek_wisata_id: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 3,
    objek_wisata_id: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 3,
    objek_wisata_id: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 3,
    objek_wisata_id: 6,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 3,
    objek_wisata_id: 7,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 3,
    objek_wisata_id: 8,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 3,
    objek_wisata_id: 9,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    jenis_tiket_id: 3,
    objek_wisata_id: 10,
    created_at: new Date(),
    updated_at: new Date(),
  },
];
const jenis_pembayaran = [
  ["bca", "bank", "-B"],
  ["bri", "bank", "-B"],
  ["mandiri", "bank", "-B"],
  ["loket", "cash", "-C"],
  ["alfamart", "cash", "-C"],
  ["dana", "e-wallet", "-E"],
  ["ovo", "e-wallet", "-E"],
  ["go-pay", "e-wallet", "-E"],
];

exports.jenisPembFactory = jenis_pembayaran.map((item, i) => ({
  jenis_pembayaran_id: `00${i + 1} ${item[2]}`,
  nama_pemb: item[0],
  metode_pemb: item[1],
  created_at: new Date(),
  updated_at: new Date(),
}));
