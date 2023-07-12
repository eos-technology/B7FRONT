<template>
  <b-card no-body>
    <img class="c-body__img" :src="signal.image" alt="" />
    <b-card-body class="c-body">
      <div class="c-body__title">
        <p class="l-medium">{{ signal.name }}</p>
      </div>
      <div class="c-body__info">
        <div class="c-body__info-box">
          <i class="b7-cup"></i>
          <p class="b-regular">Win</p>
        </div>
        <p class="b-bold text-end">{{ signal.win }}</p>
        <div class="c-body__info-box">
          <i class="b7-loss"></i>
          <p class="b-regular">Loss</p>
        </div>
        <p class="b-bold text-end">{{ signal.loss }}</p>
        <div class="c-body__info-box">
          <i class="b7-total"></i>
          <p class="b-regular">Total</p>
        </div>
        <p class="b-bold text-end">{{ signal.total }}</p>
        <div class="c-body__info-box">
          <i class="b7-profit"></i>
          <p class="b-regular">Total profit</p>
        </div>
        <p class="b-bold text-end">{{ coinFormat(signal.total_profit) }}</p>
      </div>
    </b-card-body>
    <b-card-footer><b-button variant="primary" class="w-100">{{ signal.type }}</b-button></b-card-footer>
  </b-card>
</template>



<script>
export default {
  props: {
    signal: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.c-body {
  display: grid;
  gap: 8px;

  &__title {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    &-box {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  &__img {
    border-radius: 1.6rem;
  }
}
</style>
