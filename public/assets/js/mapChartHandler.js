const datas = document.getElementById("datas").innerText;
const [visitors, favoritePlace, visitorsPerDay, tiketIncome, incomePerWeek] =
  JSON.parse(datas);

let values = visitors.map((e) => [e.provinsi, parseInt(e.pengunjung)]);

const country = fetch("/assets/json/asia.json").then((r) => r.json());
const states = fetch("/assets/json/indonesia.json").then((r) => r.json());

Promise.all([states, country]).then((data) => {
  const regions = ChartGeo.topojson.feature(
    data[0],
    data[0].objects.layer
  ).features;
  const countries = ChartGeo.topojson.feature(
    data[1],
    data[1].objects.continent_Asia_subunits
  ).features;
  const Indonesia = countries.find((d) => d.properties.geounit === "Indonesia");

  let dataValues = regions.map((d, i) => {
    let data = {};
    for (let i = 0; i < regions.length; i++) {
      data.feature = d;
      data.value = 0;
      for (let j = 0; j < values.length; j++) {
        if (values[j][0] === d.properties.name) {
          data.feature = d;
          data.value = values[j][1];
        }
      }
    }

    return data;
  });

  const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
    type: "choropleth",
    data: {
      labels: regions.map((e) => e.properties.name),
      datasets: [
        {
          label: "Countries",
          outline: Indonesia,
          data: dataValues,
          borderColor: "rgba(0,0,0, 0.5)",
        },
      ],
    },
    options: {
      responsive: true,
      showOutline: false,
      showGraticule: false,
      scales: {
        x: {
          backgroundColors: "#00FF00",
          interpolate: "warm",
          color: "black",
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        xy: {
          projection: "mercator",
        },
      },
    },
  });
});
