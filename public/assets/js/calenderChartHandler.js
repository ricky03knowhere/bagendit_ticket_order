let visitorsPerDayData = visitorsPerDay.map((e) => {
  let getDate = new Date(e.date);
  let date = `${getDate.getMonth()}/${getDate.getDate()}/${getDate.getFullYear()}`;
  return [date, parseInt(e.pengunjung)];
});

var chart = JSC.chart("chartDiv", {
  debug: false,
  type: "calendar year solid",
  data: visitorsPerDayData,
  calendar: {
    defaultEdgePoint: {
      tooltip: "",
      mouseTracking: false,
    },
  },
  legend_position: "right",
  palette: {
    colors: ["#5edef7", "#4c5af5", "#6e09ad"],
    colorBar_axis_scale_interval: 5,
  },
  defaultPoint_tooltip: "<b>{%date:date D}</b><br> %zValue pengunjung",
  toolbar_visible: false,
});
