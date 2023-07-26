<template>
  <!-- TABLE -->
  <div class="plan__table">
    <div class="plan__header">
      <h3 class="h3-medium">{{ $t('withdrawals.title') }}</h3>
      <div class="plan__header-box">
        <b-button class="btns btns--white" >{{ $t('withdrawals.seeAll') }}</b-button>
        <b-button class="btns" variant="primary"
          >{{ $t('withdrawals.deleteSelected') }}</b-button
        >
        <div class="search-filter">
          <div class="field-search">
            <b-form-input
              type="search"
              :placeholder="$t('withdrawals.search')"
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
            <th>{{ $t('withdrawals.user') }}</th>
            <th>{{ $t('withdrawals.email') }}</th>
            <th>{{ $t('withdrawals.membership') }}</th>
            <th>{{ $t('withdrawals.amount') }}</th>
            <th>{{ $t('withdrawals.available') }}</th>
            <th>{{ $t('withdrawals.date') }}</th>
            <th>{{ $t('withdrawals.wallet') }}</th>
            <th>{{ $t('withdrawals.state') }}</th>
            <th>{{ $t('withdrawals.options') }}</th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr class="table__tr" v-for="(item, index) in 4" :key="index">
            <td>00 min</td>
            <td>$0.00</td>
            <td>No</td>
            <td>USDT</td>
            <td>$0.00</td>
            <td>00/00/00 1:00</td>
            <td>TJazxW....eEExQFhR</td>
            <td>$0.00</td>
            <td class="table__actions">
              <b-button class="btns btns--white">{{ $t('withdrawals.decline') }}</b-button>
              <b-button class="btns" variant="primary">{{ $t('withdrawals.approve') }}</b-button>
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
