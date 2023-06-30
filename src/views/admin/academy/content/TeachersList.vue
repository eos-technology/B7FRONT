<template>
  <main>
    <section class="movements">
      <div class="movements-header">
        <dir></dir>
        <div class="filter-box">
          <b-button class="movements__btn" variant="primary"
            >Descargar reporte</b-button
          >
          <div class="search-filter">
            <div class="field-search">
              <b-form-input
                type="search"
                placeholder="search"
                class="b-light"
              ></b-form-input>
              <i class="b7-search"></i>
            </div>
          </div>
          <Filter />
        </div>
      </div>
      <AccordionTransactions />
    </section>
  </main>
</template>

<script setup>
import AccordionTransactions from "./AccordionTransactions.vue";
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
      border-radius: 100px;
      background: var(--inputs-fondo-2, #c2ccd6);
      color: #000;
      border: none;
      outline: none;
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
