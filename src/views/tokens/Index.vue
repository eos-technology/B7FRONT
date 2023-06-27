<template>
  <section class="token">
    <h2 class="h2-bold">Tokens</h2>
    <div class="token__grid">
      <div class="token__card token__card--blue"><ChartToken /></div>
      <div class="token__card token__card--blue">
      <h4 class="h4-bold">Token sale ends in</h4>
      <b-button variant="primary">Comprar Tokens</b-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import ChartToken from "./charts/ChartToken.vue";
</script>

<style lang="scss" scoped>
.token {
  display: grid;
  gap: 2.4rem;
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
  }
  &__card {
    display: flex;
    padding:32px;
    flex-direction: column;
    gap: 10px;
    border-radius: 16px;
    &--blue {
      border: 1px solid #7d79e7;
      background: rgba(60, 57, 135, 0.1);
    }
  }
}
</style>
