<template>
  <b-card no-body>
    <img class="c-body__img" :src="course.image" alt="" />
    <b-card-body class="c-body">
      <h6 class="l-medium">{{ course.name }}</h6>
      <div class="price">
        <h2 class="h4-bold">${{ course.price }}</h2>
        <h3 class="h6-light">/USD</h3>
      </div>
      <span class="curse-topic sm-light text-primary">{{ course.category?.name }}</span>
      <div class="details">
        <div class="number-videos">
          <i class="b7-video"></i>
          <p class="b-regular">{{ course.meta?.totalSections }} videos</p>
        </div>
      </div>
    </b-card-body>
    <b-card-footer>
      <b-button variant="primary" class="w-100" v-if="course.name"
        @click="$router.push({ name: 'Academy-Course', params: { name: course.name.toLowerCase().replace(/ /g, '-'), id: course.id } })">Ver
        curso</b-button>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  props: {
    course: {
      type: Object
    }
  }
}
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
