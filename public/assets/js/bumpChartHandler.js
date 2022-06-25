var chartVars = "KoolOnLoadCallFunction=chartReadyHandler";

KoolChart.create("chart1", "chartHolder", chartVars, "100%", "100%");

function chartReadyHandler(id) {
  document.getElementById(id).setLayout(layoutStr);
  document.getElementById(id).setData(finalData);
}

var layoutStr =
  `<KoolChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">
  <Options>
    <Legend />
  </Options>
  <NumberFormatter id="numFmt" precision="0"/>
  <Bump2DChart showDataTips="true" dataTipDisplayMode="axis" endPointDisplayName="true" startPointDisplayName="true">
    <horizontalAxis>
      <CategoryAxis categoryField="Week"/>
    </horizontalAxis>
    <verticalAxis>
      <LinearAxis/>
    </verticalAxis>
    <series>
      <Bump2DSeries id="bump1" yField="mesjid al-ahzar" displayName="mesjid al-ahzar" itemRenderer="CircleItemRenderer" labelPosition="inside" form="curve">
        <showDataEffect>

          <SeriesClip duration="1000"/>
        </showDataEffect>
      </Bump2DSeries>
      <Bump2DSeries id="bump2" yField="kantin bagendit" displayName="kantin bagendit" itemRenderer="CircleItemRenderer" labelPosition="inside" form="curve">
        <showDataEffect>

          <SeriesClip duration="1000"/>
        </showDataEffect>
      </Bump2DSeries>
      <Bump2DSeries id="bump3" yField="bagendit store" displayName="bagendit store" itemRenderer="CircleItemRenderer" labelPosition="inside" form="curve">
        <showDataEffect>

          <SeriesClip duration="1000"/>
        </showDataEffect>
      </Bump2DSeries>
      <Bump2DSeries id="bump1" yField="taman main anak" displayName="taman main anak" itemRenderer="CircleItemRenderer" labelPosition="inside" form="curve">
        <showDataEffect>

          <SeriesClip duration="1000"/>
        </showDataEffect>
      </Bump2DSeries>
      <Bump2DSeries id="bump2" yField="photo spots" displayName="photo spots" itemRenderer="CircleItemRenderer" labelPosition="inside" form="curve">
        <showDataEffect>

          <SeriesClip duration="1000"/>
        </showDataEffect>
      </Bump2DSeries>
      <Bump2DSeries id="bump3" yField="taman anggrek" displayName="taman anggrek" itemRenderer="CircleItemRenderer" labelPosition="inside" form="curve">
        <showDataEffect>

          <SeriesClip duration="1000"/>
        </showDataEffect>
      </Bump2DSeries>
      <Bump2DSeries id="bump1" yField="sport area" displayName="sport area" itemRenderer="CircleItemRenderer" labelPosition="inside" form="curve">
        <showDataEffect>

          <SeriesClip duration="1000"/>
        </showDataEffect>
      </Bump2DSeries>
      <Bump2DSeries id="bump2" yField="danau eceng" displayName="danau eceng" itemRenderer="CircleItemRenderer" labelPosition="inside" form="curve">
        <showDataEffect>

          <SeriesClip duration="1000"/>
        </showDataEffect>
      </Bump2DSeries>
      <Bump2DSeries id="bump3" yField="jelajah danau" displayName="jelajah danau" itemRenderer="CircleItemRenderer" labelPosition="inside" form="curve">
        <showDataEffect>

          <SeriesClip duration="1000"/>
        </showDataEffect>
      </Bump2DSeries>
      <Bump2DSeries id="bump3" yField="wisata alam bagendit" displayName="wisata alam bagendit" itemRenderer="CircleItemRenderer" labelPosition="inside" form="curve">
        <showDataEffect>

          <SeriesClip duration="1000"/>
        </showDataEffect>
      </Bump2DSeries>
    </series>
    <annotationElements>
      <CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>
    </annotationElements>
  </Bump2DChart>
</KoolChart>`
var chartData = []
let weekData = {}
let finalData = []


const weeks = [...new Set(favoritePlace.map(e => e.week))]
const chartDataGroup = weeks.map(e => ({
  // 'Week': 'Week ' + e,
  'data': []
}))

weeks.map((e, n) => {
  for (let i = 0; i < favoritePlace.length; i++) {
    if (e === favoritePlace[i].week) {
      weekData.Week = e
      weekData[favoritePlace[i].nama] = parseInt(favoritePlace[i].sum)
      chartData.push(weekData)
    } else {
      weekData = {}
    }
  }

  for (let i = 0; i < chartData.length; i++) {
    if (e == chartData[i].Week) {
      chartDataGroup[n].data.push(chartData[i])
    }
  }
  let spreadData = [
    ...chartDataGroup[n].data
  ].reduce((prev, cur) => {
    cur.Week = "Week " + cur.Week
    return ({
      ...prev,
      ...cur
    })
  })
  finalData.push(spreadData)
})
