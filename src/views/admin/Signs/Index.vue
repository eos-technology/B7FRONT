<template>
  <section class="signs" v-if="!createSign">
    <div class="header d-flex justify-content-between align-items-center">
      <h2 class="h2-bold">{{ $t("signs.signs") }}</h2>
      <b-button variant="primary" @click="createSign = true"
        >Crear señal</b-button
      >
    </div>
    <div class="signs__cards">
      <Cards img="crypto" />
      <Cards img="crypto" />
      <Cards img="crypto" />
      <Cards img="crypto" />
      <Cards img="crypto" />
      <Cards img="crypto" />
      <Cards img="crypto" />
      <Cards img="crypto" />
    </div>
  </section>
  <section class="edit" v-if="createSign">
    <GoBackDummy @click="createSign = false" />
    <CreateSign />
  </section>
</template>

<script setup>
import Cards from "./content/Cards.vue";
import CreateSign from "./content/CreateSign.vue";

import { ref } from "vue";

let createSign = ref(false);
</script>

<style lang="scss" scoped>
.signs {
  display: grid;
  gap: 2.4rem;

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;

    @media (max-width: 1180px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 860px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
}

.edit {
  display: grid;
  gap: 4.8rem;
}
</style>
