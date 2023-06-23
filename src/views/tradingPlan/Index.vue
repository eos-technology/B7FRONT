<template>
  <div class="plan">
    <div class="plan__header">
      <h2 class="h2-bold">Trading plan</h2>
      <b-button variant="primary">Añadir trade</b-button>
    </div>

    <div class="plan__chart">
      <ChartPlans />
    </div>
  </div>
</template>

<script setup>
import ChartPlans from "./charts/ChartPlans.vue";
</script>

<style lang="scss" scoped>
.plan {
  display: grid;
  gap: 2.4rem;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
