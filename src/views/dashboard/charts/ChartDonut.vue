<template>
  <div class="chart-donut">
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
  <div class="chart-donut__info">
    <div class="chart-donut__item">
      <div class="chart-donut__text">
        <div class="dot bg-danger"></div>
        <p class="b-light">Etherium</p>
      </div>
      |
      <p class="b-bold text-danger">-2%</p>
    </div>
    <div class="chart-donut__item">
      <div class="chart-donut__text">
        <div class="dot bg-lila"></div>
        <p class="b-light">Eleven</p>
      </div>
      |
      <p class="b-bold text-lila">-1%</p>
    </div>
    <div class="chart-donut__item">
      <div class="chart-donut__text">
        <div class="dot bg-warning"></div>
        <p class="b-light">BitcoinCash</p>
      </div>
      |
      <p class="b-bold text-warning">+1%</p>
    </div>
    <div class="chart-donut__item">
      <div class="chart-donut__text">
        <div class="dot bg-pink"></div>
        <p class="b-light">Lightcoin</p>
      </div>
      |
      <p class="b-bold text-pink">+1%</p>
    </div>
    <div class="chart-donut__item">
      <div class="chart-donut__text">
        <div class="dot bg-success"></div>
        <p class="b-light">Bitcoin</p>
      </div>
      |
      <p class="b-bold text-success">+1%</p>
    </div>
  </div>
</template>

<script setup>
const series = [44, 55, 41, 17, 15];
const chartOptions = {
  chart: {
    type: "donut",
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#FF595A", "#7367E9", "#FFAB1B", "#FF4E78", "#0EC564"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    show: false,
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
              return "Total";
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
};
</script>

<style lang="scss" scoped>
.chart-donut {
  width: 16.4rem;
  margin: 0 auto;
  &__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.4rem;
    justify-content: space-between;
    @media (max-width: 430px) {
      grid-template-columns: 1fr;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
  }
  &__text {
    display: flex;
    gap: 8px;
    align-items: center;
  }
}
.b-light {
  min-width: 8rem;
}
</style>
