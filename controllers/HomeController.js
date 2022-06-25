const db = require("../models");

exports.admin = async (req, res) => {
  const visitors = await db.sequelize.query(
    `SELECT pk.pos_kode_id, pk.provinsi, count(*) AS pengunjung FROM users u
    JOIN pos_kodes pk ON u.pos_kode_id = pk.id
    GROUP BY pk.pos_kode_id, pk.provinsi; `
  );
  const favoritePlace = await db.sequelize.query(
    `SELECT obj.objek_wisata_id, ow.nama, obj.week, sum(obj.pengunjung) AS sum FROM ( 
      SELECT tw.objek_wisata_id, sales.week, sales.jenis_tiket_id, sales.jumlah_tiket_sold AS pengunjung FROM (
        SELECT date_part('week'::text, dp.tanggal_wisata) AS week, t.jenis_tiket_id, count(dp.tiket_id) AS jenis_tiket_sold, 
        sum(dp.jumlah_tiket) AS jumlah_tiket_sold FROM detail_pemesanans dp
        JOIN tikets t ON t.id = dp.tiket_id
        GROUP BY (date_part('week'::text, dp.tanggal_wisata)), t.jenis_tiket_id
        ORDER BY (date_part('week'::text, dp.tanggal_wisata))) sales
      JOIN tiket_wisatas tw ON sales.jenis_tiket_id = tw.jenis_tiket_id
      ORDER BY sales.week, tw.objek_wisata_id) obj
    JOIN objek_wisatas ow ON ow.id = obj.objek_wisata_id
    GROUP BY obj.objek_wisata_id, obj.week, ow.nama
    ORDER BY obj.objek_wisata_id, obj.week;`
  );
  const visitorsPerDay = await db.sequelize.query(
    `SELECT date_trunc('day'::text, dp.tanggal_wisata) AS date, count(dp.jumlah_tiket) AS pengunjung FROM detail_pemesanans dp
    GROUP BY (date_trunc('day'::text, dp.tanggal_wisata))
    ORDER BY (date_trunc('day'::text, dp.tanggal_wisata));`
  );
  const tiketIncome = await db.sequelize.query(
    `SELECT date_part('week'::text, dp.tanggal_wisata) AS week, t.jenis_tiket_id,count(dp.tiket_id) AS jenis_tiket_sold, 
    sum(dp.jumlah_tiket) AS jumlah_tiket_sold FROM detail_pemesanans dp
    JOIN tikets t ON t.id = dp.tiket_id
    GROUP BY (date_part('week'::text, dp.tanggal_wisata)), t.jenis_tiket_id
    ORDER BY jenis_tiket_id;`
  );
  const incomePerWeek = await db.sequelize.query(
    `SELECT date_part('week'::text, p.tanggal_wisata) AS week, sum(p.total_harga) AS total
    FROM detail_pemesanans p
    GROUP BY (date_part('week'::text, p.tanggal_wisata))
    ORDER BY (date_part('week'::text, p.tanggal_wisata));`
  );

  const datas = [
    visitors[0],
    favoritePlace[0],
    visitorsPerDay[0],
    tiketIncome[0],
    incomePerWeek[0],
  ];
  console.log(req.user);
  return res.render("pages/dashboard", {
    title: "Dashboard",
    layout: "layouts/index",
    datas: JSON.stringify(datas),
    user: req.user,
  });
};