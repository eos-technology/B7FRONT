<template>
  <section class="token">
    <h2 class="h2-bold">Tokens</h2>
    <div class="token__grid">
      <div class="token__card token__card--blue"><ChartToken /></div>
      <div class="token__card token__card--blue">
        <h4 class="h4-bold">Token sale ends in</h4>

        <vue-countdown
          :time="4 * 24 * 60 * 60 * 1000"
          v-slot="{ days, hours, minutes, seconds }"
        >
          <div class="count">
            <div class="count__box">
              <p class="l-medium">Days</p>
              <div class="count__box-data">{{ days }}</div>
            </div>
            <div class="count__box">
              <p class="l-medium">Hours</p>
              <div class="count__box-data">{{ hours }}</div>
            </div>
            <div class="count__box">
              <p class="l-medium">Minutes</p>
              <div class="count__box-data">{{ minutes }}</div>
            </div>
            <div class="count__box">
              <p class="l-medium">Seconds</p>
              <div class="count__box-data">{{ seconds }}</div>
            </div>
          </div>
        </vue-countdown>
        <div class="token__progress">
          <p>${{ value }} pledget of ${{ max }} goal</p>
          <b-progress variant="success" :value="value" :max="max"></b-progress>
        </div>
        <b-button variant="primary">Comprar Tokens</b-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ChartToken from "./charts/ChartToken.vue";

const value = ref(18090);
const max = ref(25000);
</script>

<style lang="scss" scoped>
.token {
  display: grid;
  gap: 2.4rem;
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    @media ((max-width: 1100px)) {
      grid-template-columns: 1fr;
      gap: 2.4rem;
    }
  }
  &__card {
    display: flex;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    border-radius: 16px;
    &--blue {
      border: 1px solid #7d79e7;
      background: rgba(60, 57, 135, 0.1);
    }
    @media ((max-width: 600px)) {
      padding: 1.2rem;
  }
  }
  &__progress {
    display: grid;
    gap: 8px;
  }
}

.count {
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(4, 1fr);
  @media ((max-width: 600px)) {
    grid-template-columns: repeat(2, 1fr);
  }
  &__box {
    display: grid;
    gap: 8px;
    text-align: center;
    &-data {
      display: flex;
      padding: 16px;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
