<template>
  <main v-if="step === 1">
    <h2 class="h2-bold">Usuarios</h2>
    <section class="movements">
      <div class="movements-header">
        <h3 class="h3-medium">Todos los usuarios</h3>
        <div class="filter-box">
          <b-button class="movements__btn" variant="primary">Descargar reporte</b-button>
          <div class="search-filter">
            <div class="field-search">
              <b-form-input type="search" placeholder="search" class="b-light"></b-form-input>
              <i class="b7-search"></i>
            </div>
          </div>
          <Filter />
        </div>
      </div>
      <AccordionTransactions @viewUser="step = 2" />
    </section>
  </main>
  <section class="user" v-if="step === 2">
    <UserTabs />
  </section>
</template>

<script setup>
import { ref } from "vue";
import AccordionTransactions from "./content/AccordionTransactions.vue";
import UserTabs from './content/UserTabs.vue'

const step = ref(1);
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .signal-cards {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
  }

  .movements {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 1rem;
    padding: 1.6rem;
    background: rgba(255, 255, 255, 0.05);

    &__btn {
      height: 44px;
      padding: 0 16px;
    }

    .movements-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .filter-box {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }
}
</style>
