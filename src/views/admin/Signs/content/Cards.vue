<template>
  <b-card no-body>
    <img class="c-body__img" :src="getFile('images', img, 'webp')" alt="" />
    <b-card-body class="c-body">
      <div class="c-body__title">
        <i class="b7-btc text-primary"></i>
        <p class="l-medium">BTC/ USD</p>
      </div>
      <div class="c-body__info">
        <div class="c-body__info-box">
          <i class="b7-cup"></i>
          <p class="b-regular">{{ $t("signs.win") }}</p>
        </div>
        <p class="b-bold text-end">5%</p>
        <div class="c-body__info-box">
          <i class="b7-loss"></i>
          <p class="b-regular">{{ $t("signs.loss") }}</p>
        </div>
        <p class="b-bold text-end">1%</p>
        <div class="c-body__info-box">
          <i class="b7-total"></i>
          <p class="b-regular">Total</p>
        </div>
        <p class="b-bold text-end">1:5</p>
        <div class="c-body__info-box">
          <i class="b7-profit"></i>
          <p class="b-regular">{{ $t("signs.profit") }}</p>
        </div>
        <p class="b-bold text-end">1000</p>
      </div>
    </b-card-body>
    <b-card-footer>
      <b-button variant="primary" class="w-100">{{ $t("signs.delete") }}</b-button>
    </b-card-footer>
  </b-card>
</template>

<script setup>
defineProps({ img: String });
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
