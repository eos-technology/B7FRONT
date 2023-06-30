<template>
  <div class="plan" v-if="trade === false">
    <div class="plan__header">
      <h2 class="h2-bold">Compras</h2>
      <b-button variant="primary" @click="trade = true">Añadir trade</b-button>
    </div>

    <div class="plan__chart">
      <ChartPlans />
    </div>



    <!-- TABLE -->
    <div class="plan__table">
      <div class="plan__header">
        <h3 class="h3-bold">Movimientos</h3>
        <b-button variant="primary" class="ml-auto">Descargar Reporte</b-button>
        <div class="plan__filter">
          <div class="search-filter">
            <div class="field-search">
              <b-form-input type="search" placeholder="Search" class="b-light"></b-form-input>
              <i class="b7-search"></i>
            </div>
          </div>
          <Filter />
        </div>
      </div>
      <div class="table" v-dragscroll.x>
        <table class="table__container">
          <thead>
            <tr>
              <th class="sm-bold">USUARIO</th>
              <th class="sm-bold">TIPO</th>
              <th class="sm-bold">DESCRIPCION</th>
              <th class="sm-bold">PAGO</th>
              <th class="sm-bold">FECHA</th>
              <th class="sm-bold">ESTADO</th>
              <th class="sm-bold">PRECIO</th>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr class="table__tr" v-for="(item, index) in 4" :key="index">
              <td class="sm-regular">00 min</td>
              <td class="sm-regular">$0.00</td>
              <td class="sm-regular">No</td>
              <td class="sm-regular">USDT</td>
              <td class="sm-regular">00/00/00 1:00</td>
              <td class="sm-regular">Estado</td>
              <td class="sm-regular">$0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <b-pagination align="center" v-model="currentPage" pills :total-rows="rows"></b-pagination>
    </div>
  </div>

  <section class="trade" v-if="trade">
    <GoBackDummy @click="trade = false" />
    <AddTrader />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ChartPlans from "./charts/ChartPlans.vue";
import AddTrader from "./content/AddTrader.vue";

const trade = ref(false);
const rows = ref(100);
const currentPage = ref(3);

const form = ref({
  active: "",
});
</script>

<style lang="scss" scoped>
.plan {
  display: grid;
  gap: 2.4rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;
  }

  &__filter {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  &__table {
    padding: 2.4rem;
    display: grid;
    gap: 2.4rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.05);

    @media (max-width: 600px) {
      padding: 1.2rem;
    }
  }
}

tbody tr:nth-child(even) {
  background: rgba(249, 249, 249, 0.10) !important;
}

.trade {
  display: grid;
  gap: 4.8rem;
}
</style>
