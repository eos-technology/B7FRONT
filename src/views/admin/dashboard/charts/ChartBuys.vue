<template>
  <div id="chart">
    <apexchart
      type="polarArea"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
const series = [30, 60, 80];

const chartOptions = {
  chart: {
    type: "polarArea",
  },
  stroke: {
    show: false,
    width: 1,
  },
  fill: {
    opacity: 1,
  },
  yaxis: {
    show: false,
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0,
      },
      spokes: {
        strokeWidth: 0,
      },
    },
  },
  labels: ["Cursos 30%", "Token 60%", "Membership 80%"],
  colors: ["#48A254", "#3C3987", "#EE8722"],
  legend: {
    position: "bottom",
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
