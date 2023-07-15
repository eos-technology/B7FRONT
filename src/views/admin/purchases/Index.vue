<template>
  <div class="plan">
    <div class="plan__header">
      <h2 class="h2-bold">{{ $t('purchases.title') }}</h2>
    </div>
    <div class="plan__chart">
      <ChartPlans />
    </div>
    <!-- TABLE -->
    <div class="plan__table">
      <div class="plan__header">
        <h3 class="h3-bold">{{ $t('purchases.movements') }}</h3>
        <b-button variant="primary" class="ml-auto">{{ $t('purchases.download') }}</b-button>
        <div class="plan__filter">
          <div class="search-filter">
            <div class="field-search">
              <b-form-input type="search" :placeholder="$t('purchases.search')" class="b-light"></b-form-input>
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
              <th class="sm-bold">{{ $t('purchases.user') }}</th>
              <th class="sm-bold">{{ $t('purchases.type') }}</th>
              <th class="sm-bold">{{ $t('purchases.description') }}</th>
              <th class="sm-bold">{{ $t('purchases.pay') }}</th>
              <th class="sm-bold">{{ $t('purchases.date') }}</th>
              <th class="sm-bold">{{ $t('purchases.state') }}</th>
              <th class="sm-bold">{{ $t('purchases.price') }}</th>
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
</template>

<script setup>
import { ref } from "vue";
import ChartPlans from "./charts/ChartPlans.vue";

const rows = ref(100);
const currentPage = ref(3);

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
