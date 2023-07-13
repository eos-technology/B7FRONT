<template>
  <main v-if="step === 1 && show === false">
    <article class="live__header">
      <h2 class="h2-bold">Trading Live</h2>
      <b-button variant="primary" @click="step = 2">Crear clase</b-button>
    </article>

    <article class="live__filter">
      <div class="search-filter">
        <div class="field-search">
          <b-form-input type="search" placeholder="search" class="b-light"></b-form-input>
          <i class="b7-search"></i>
        </div>
      </div>
      <Filter />
    </article>

    <div class="courses-grid">
      <TradingClassCard v-for="(course, index) in 8" :key="index" @editClase="show = true" v-if="!show" />
    </div>
  </main>

  <section class="create" v-if="step === 2">
    <GoBackDummy @click="step = 1" />
    <CreateClase />
  </section>

  <section class="edit" v-if="show">
    <GoBackDummy @click="show = false" />
    <EditClass />
  </section>
</template>

<script setup>
import { ref } from "vue";
import TradingClassCard from "./content/TradingClassCard.vue";
import CreateClase from "./content/CreateClase.vue";
import EditClass from "./content/EditClass.vue";

const show = ref(false);

const step = ref(1);
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1.6rem;
    width: 100%;
  }
}

.live__header {
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  flex-wrap: wrap;
  align-items: center;
}

.live__filter {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.create,
.edit {
  display: grid;
  gap: 3.2rem;
}
</style>
