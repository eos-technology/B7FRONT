<template>
  <div class="chart-donut">
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
const series = [44, 55, 41, 17, 15];
const chartOptions = {
  chart: {
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        background: "#0C181A",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "22px",
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 700,
            color: "#fff",
            offsetY: 0,
            formatter: function (val) {
              return "+12%";
            },
          },
          value: {
            show: true,
            fontSize: "10px",
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 300,
            offsetY: 0,
            color: "#fff",
          },
          total: {
            show: true,
            showAlways: true,
            label: "Total",
            fontSize: "22px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 600,
            color: "#fff",
            formatter: function (w) {
              return 'Total'
            },
            // formatter: function (w) {
            //   return w.globals.seriesTotals.reduce((a, b) => {
            //     return a + b;
            //   }, 0);
            // },
          },
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
</script>

<style lang="scss" scoped></style>
