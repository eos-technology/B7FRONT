<template>
  <b-card no-body>
    <img class="c-body__img" :src="getFile('images', img, 'webp')" alt="" />
    <b-card-body class="c-body">
      <h6 class="l-medium">Nombre Curso</h6>
      <div class="price">
        <h2 class="h4-bold">$80</h2>
        <h3 class="h6-light">/usd</h3>
      </div>
      <span class="curse-topic sm-light text-primary">Finanzas</span>
      <div class="details">
        <div class="number-videos">
          <i class="b7-video"></i>
          <p class="b-regular">20 videos</p>
        </div>
        <div class="start">
          <i class="b7-calendar"></i>
          <p class="b-regular">Inicia 11 de Julio</p>
        </div>
      </div>
    </b-card-body>
    <b-card-footer><b-button variant="primary" class="w-100">Ver curso</b-button></b-card-footer>
  </b-card>
</template>

<script setup>
defineProps({ img: String });
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
