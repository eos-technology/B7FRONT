<template>
  <div class="chart-donut__container">
    <div class="chart-donut">
      <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
    </div>
    <div class="chart-donut__info">
      <h5 class="h5-medium mb-4">Tokens</h5>
      <div class="chart-donut__item" v-for="label in labels">
        <div class="chart-donut__text">
          <div class="dot bg-success"></div>
          <p class="b-light">{{ label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const series = [102057043, 58318310, 37906901, 29159155, 29159155, 14579577, 14579577, 5831831];
const labels = ["Private | 102,057,043", "Seed | 58,318,310", "Marketing | 37,906,901", "Public | 29,159,155", "Team | 29,159,155", "Advisory | 14,579,577", "Treasury | 14,579,577", "Contingency | 5,831,831"]
const chartOptions = {
  chart: {
    type: "donut",
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#0EC564", "#FF595A", "#7367E9", "#FFAB1B", "#FF4E78"],
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
            show: false,
            fontSize: "10px",
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 300,
            offsetY: 0,
            color: "#fff",
          },
          total: {
            show: false,
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__info {
    display: grid;
    column-gap: 2.4rem;

    width: 100%;

    @media (max-width: 430px) {
      grid-template-columns: 1fr;
    }
  }

  &__container {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    @media (max-width: 580px) {
      flex-direction: column;
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
