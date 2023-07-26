<template>
  <section class="chart-plans">
    <!-- Chart -->

    <div class="chart-trading">
      <div class="chart-trading__header">
        <div class="chart-trading__box">
          <div class="chart-trading__label chart-trading__label--blue">
            <div class="dot-chart bg-blue"></div>
            <p class="b-regular">{{ $t(series[0].name) }}</p>
          </div>
          <div class="chart-trading__label chart-trading__label--yellow">
            <div class="dot-chart bg-warning"></div>
            <p class="b-regular">{{ $t(series[1].name) }}</p>
          </div>
          <div class="chart-trading__label chart-trading__label--purple">
            <div class="dot-chart bg-lila"></div>
            <p class="b-regular">{{ series[2].name }}</p>
          </div>
        </div>
        <div class="chart-trading__box">
          <b-button size="sm">1H</b-button>
          <b-button size="sm">1D</b-button>
          <b-button size="sm">1W</b-button>
          <b-button size="sm" active>1M</b-button>
          <b-button size="sm">ALL</b-button>
        </div>
      </div>
      <apexchart
        type="line"
        height="320px"
        width="100%"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </section>
</template>

<script setup>
const series = [
  {
    name: "chartacademy.revenue",
    data: [0, 33000, 54000, 3500, 54000, 4000, 0],
  },
  {
    name: "chartacademy.riskbenefit",
    data: [0, 8000, 50000, 62000, 4000, 500, 0],
  },
  {
    name: "Swiset",
    data: [0, 16000, 15500, 32000, 8000, 8500, 0],
  },
];
const chartOptions = {
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#3C76FF", "#FFAB1B", "#905ADC"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  tooltip: {
    theme: "dark",
  },
  grid: {
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "10px",
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "300",
      },
    },
  },
  xaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontWeight: "300",
        fontFamily: "Urbanist, sans-serif",
        fontSize: "10px",
      },
    },
    categories: [1, 2, 3, 4, 5, 6, 7],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  markers: {
    size: 3,
    strokeWidth: 0,
  },
};
</script>

<style lang="scss" scoped>


.chart-trading {
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 24px;
  border-radius: 16px;
  background: #201E61;
  @media (max-width: 600px) {
    padding: 1.2rem;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    height: min-content;
    flex-wrap: wrap;
    gap: 1.6rem;
  }
  &__box {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  &__label {
    display: flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    &--blue {
      background: rgba(60, 118, 255, 0.1);
    }
    &--yellow {
      background: rgba(255, 171, 27, 0.1);
    }
    &--purple {
      background: rgba(144, 90, 220, 0.1);
    }
  }
}

.dot-chart {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.bg-blue {
  background-color: #3c76ff;
}
</style>
