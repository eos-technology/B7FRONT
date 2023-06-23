<template>
  <section class="signs">
    <h2 class="h2-bold">{{ $t("signs.signs") }}</h2>
    <div class="signs__cards">
      <Cards img="crypto" btn="Sell"/>
      <Cards img="crypto" btn="Buy"/>
      <Cards img="crypto" btn="Buy"/>
      <Cards img="crypto" btn="Sell"/>
      <Cards img="crypto" btn="Sell"/>
      <Cards img="crypto" btn="Buy"/>
      <Cards img="crypto" btn="Buy"/>
      <Cards img="crypto" btn="Sell"/>
    </div>
  </section>
</template>

<script setup>
import Cards from './content/Cards.vue'
</script>

<style lang="scss" scoped>
.signs {
  display: grid;
  gap: 2.4rem;
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
  }
}
</style>
