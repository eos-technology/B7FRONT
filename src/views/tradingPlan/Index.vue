<template>
  <div class="plan">
    <div class="plan__header">
      <h2 class="h2-bold">Trading plan</h2>
      <b-button variant="primary">Añadir trade</b-button>
    </div>

    <div class="plan__chart">
      <ChartPlans />
    </div>

    <div class="plan__table">
      <div class="plan__filter">
        <div class="search-filter">
          <div class="field-search">
            <b-form-input
              type="search"
              placeholder="Search"
              class="b-light"
            ></b-form-input>
            <i class="b7-search"></i>
          </div>
        </div>
        <Filter />
      </div>
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
  &__filter {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
}
</style>
