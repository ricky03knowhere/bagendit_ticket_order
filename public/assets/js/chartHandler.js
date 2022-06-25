const data = {
  labels: incomePerWeek.map((e) => "Week " + e.week),
  datasets: [
    {
      label: false,
      data: incomePerWeek.map((e) => parseInt(e.total)),
      borderColor: "rgba(171, 205, 239, 0.662)",
      backgroundColor: "#068fff",
      pointStyle: "circle",
      pointRadius: 10,
      pointHoverRadius: 15,
    },
  ],
};
const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        // display: true,
        // text: 'Penghasilan Perminggu',
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Minggu",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        grid: {
          color: "#d8396e",
          borderColor: "grey",
          tickColor: "grey",
        },
      },
      y: {
        title: {
          display: true,
          text: "Penghasilan (Rp)",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  },
};
const ctx = document.getElementById("canvas1").getContext("2d");
const myChart = new Chart(ctx, config);

let tiketData = [...Array(3)].map((e) => []);
tiketIncome.map((e) =>
  e.jenis_tiket_id === 1
    ? tiketData[0].push(e.jumlah_tiket_sold)
    : e.jenis_tiket_id === 2
    ? tiketData[1].push(e.jumlah_tiket_sold)
    : e.jenis_tiket_id === 3
    ? tiketData[2].push(e.jumlah_tiket_sold)
    : null
);
// console.log(tiketData);

const data2 = {
  labels: [...new Set(tiketIncome.map((e) => "Week " + e.week))],
  datasets: [
    {
      label: false,
      data: tiketData[0],
      label: "Anak-anak",
      backgroundColor: "rgba(224, 235, 9, 0.6)",
    },
    {
      label: false,
      data: tiketData[1],
      label: "Dewasa",
      backgroundColor: "rgba(6, 143, 255, 0.6)",
    },
    {
      label: false,
      data: tiketData[2],
      label: "Eksklusif",
      backgroundColor: "rgba(181, 11, 248, 0.6)",
    },
  ],
};
const config2 = {
  type: "bar",
  data: data2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        title: {
          display: true,
          text: "Jenis Tiket",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      title: {
        // display: true,
        // text: 'Penghasilan Perminggu',
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Minggu",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        grid: {
          color: "#d8396e",
          borderColor: "grey",
          tickColor: "grey",
        },
      },
      y: {
        title: {
          display: true,
          text: "Tiket Terjual (pcs)",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  },
};

const ctx2 = document.getElementById("canvas2").getContext("2d");
const myChart2 = new Chart(ctx2, config2);
