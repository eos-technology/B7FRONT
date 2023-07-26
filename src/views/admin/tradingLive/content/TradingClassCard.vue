<template>
  <b-card no-body>
    <img
      class="c-body__img"
      :src="getFile('images', 'trading-image', 'webp')"
      alt=""
    />
    <b-card-body class="c-body">
      <h5 class="h5-bold">{{ $t('tradingLive.titleCard') }}</h5>
      <p class="b-light">
        Nunc imperdiet diam vitae fringilla laoreet. Ut sodales purus eu diam
      </p>
    </b-card-body>
    <b-card-footer>
      <div class="d-flex align-items-center gap-3 w-100">
        <b-button class="btns--white w-100" @click="$emit('editClase')"
          >{{ $t('tradingLive.edit') }}</b-button
        >
        <b-button variant="primary" class="w-100">{{ $t('tradingLive.getInto') }}</b-button>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script setup>
defineEmits("editClase");
</script>

<style lang="scss" scoped>
.c-body {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .price {
    display: flex;
    align-items: baseline;
  }

  .curse-topic {
    background: rgba(238, 135, 34, 0.2);
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    align-self: flex-start;
  }

  .details {
    display: flex;
    flex-direction: column;

    .number-videos,
    .start {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;

      .b-regular {
        font-size: 1rem;
      }

      i {
        font-size: 1.125rem;
      }
    }
  }

  &__img {
    object-fit: cover;
    border-radius: 16px;
  }
}
</style>
