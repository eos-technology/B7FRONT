<template>
  <!-- TABLE -->
  <div class="plan__table">
    <div class="plan__header">
      <div></div>
      <div class="plan__header-box">
        <b-button class="btns btns--white">{{ $t('plantable.downloadreport') }}</b-button>

        <div class="search-filter">
          <div class="field-search">
            <b-form-input
              type="search"
              :placeholder="$t('search.search')"
              class="b-light"
            ></b-form-input>
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
            <th>{{ $t('plantable.user') }}</th>
            <th>{{ $t('plantable.email') }}</th>
            <th>{{ $t('plantable.course') }}</th>
            <th>{{ $t('plantable.date') }}</th>
            <th>{{ $t('plantable.category') }}</th>
            <th>{{ $t('plantable.price') }}</th>

          </tr>
        </thead>
        <tbody class="table__body">
          <tr class="table__tr" v-for="(item, index) in 4" :key="index">
            <td>00 min</td>
            <td>$0.00</td>
            <td>No</td>
            <td>00/00/00 1:00</td>
            <td>USDT</td>
            <td>$0.00</td>
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
</template>

<script setup>
import { ref } from "vue";
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
    &-box {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
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
</style>
