<template>
  <div class="plan">
    <div class="plan__header">
      <h2 class="h2-bold">Trading plan</h2>
      <b-button variant="primary">Añadir trade</b-button>
    </div>

    <div class="plan__chart">
      <ChartPlans />
    </div>

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

    <!-- TABLE -->
    <div class="plan__table">
      <div class="plan__header">
        <h6 class="h6-bold">Trades</h6>
        <b-button variant="primary">Eliminar seleccionados</b-button>
      </div>
      <div class="table" v-dragscroll.x>
        <table class="table__container">
          <thead>
            <tr>
              <th class="left">
                <div class="d-flex align-items-center gap-2">
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="form.active"
                    name="checkbox-1"
                    value="1"
                    unchecked-value="0"
                  >
                  </b-form-checkbox>
                  Activo
                </div>
              </th>
              <th>GESTO</th>
              <th>FECHA APERTURA</th>
              <th>DURACIÓN</th>
              <th>PRECIO ENTRADA</th>
              <th>ESTRATEGIA</th>
              <th>BENEFICIO NETO</th>
              <th>RIESGO MONETARIO</th>
              <th>ESTADO</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr class="table__tr" v-for="(item, index) in 4" :key="index">
              <td class="left">
                <div class="d-flex align-items-center gap-2">
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="form.active"
                    name="checkbox-1"
                    value="1"
                    unchecked-value="0"
                  >
                  </b-form-checkbox>
                  <p class="sm-regular">Bitcoin</p>
                </div>
              </td>
              <td>Buy</td>
              <td>00/00/00 1:00</td>
              <td>00 min</td>
              <td>$0.00</td>
              <td>No</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>Estado</td>
              <td class="table__actions">
                <i class="b7-eye"></i>
                <i class="b7-pen"></i>
                <i class="b7-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <b-pagination
        align="center"
        v-model="currentPage"
        pills
        :total-rows="rows"
      ></b-pagination>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChartPlans from "./charts/ChartPlans.vue";

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
    @media (max-width:600px) {
      padding: 1.2rem;
    }
  }
}





</style>
