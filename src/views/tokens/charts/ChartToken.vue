<template>
  <div class="chart-donut__container">
    <div class="chart-donut">
      <apexchart
        type="donut"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    <div class="chart-donut__info">
      <h5 class="h5-medium mb-4">Tokens</h5>
      <div class="chart-donut__item">
        <div class="chart-donut__text">
          <div class="dot bg-success"></div>
          <p class="b-light">{{ $t('tokens.nameTokens') }}</p>
        </div>
        |
        <p class="b-bold text-success">{{ $t('tokens.porcent') }} %</p>
      </div>
      <div class="chart-donut__item">
        <div class="chart-donut__text">
          <div class="dot bg-danger"></div>
          <p class="b-light">{{ $t('tokens.nameTokens') }}</p>
        </div>
        |
        <p class="b-bold text-danger">{{ $t('tokens.porcent') }} %</p>
      </div>
      <div class="chart-donut__item">
        <div class="chart-donut__text">
          <div class="dot bg-lila"></div>
          <p class="b-light">{{ $t('tokens.nameTokens') }}</p>
        </div>
        |
        <p class="b-bold text-lila">{{ $t('tokens.porcent') }} %</p>
      </div>
      <div class="chart-donut__item">
        <div class="chart-donut__text">
          <div class="dot bg-warning"></div>
          <p class="b-light">{{ $t('tokens.nameTokens') }}</p>
        </div>
        |
        <p class="b-bold text-warning">{{ $t('tokens.porcent') }} %</p>
      </div>
      <div class="chart-donut__item">
        <div class="chart-donut__text">
          <div class="dot bg-pink"></div>
          <p class="b-light">{{ $t('tokens.nameTokens') }}</p>
        </div>
        |
        <p class="b-bold text-pink">{{ $t('tokens.porcent') }} %</p>
      </div>
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
