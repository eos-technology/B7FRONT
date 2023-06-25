<template>
  <b-card no-body>
    <img class="c-body__img" :src="getFile(course.imagePath, course.imageName, course.imageExtension)" alt="" />
    <b-card-body class="c-body">
      <h6 class="l-medium">{{ course.name }}</h6>
      <span class="curse-topic sm-light text-primary">{{ course.topic }}</span>
      <div class="progress-bar">
        <div class="bar">
          <div v-for="progress in 5" :key="progress" class="white-slots"
            :class="{ 'bg-primary': progress <= (course.progressPercentage / 20) }"></div>
        </div>
        <div class="percentage xs-medium">{{ course.progressPercentage }}%</div>
      </div>
      <div class="details">
        <div class="number-videos">
          <i class="b7-video"></i>
          <p class="b-regular">{{ course.numberOfVideos }} videos</p>
        </div>
      </div>
    </b-card-body>
    <b-card-footer><b-button variant="primary" class="w-100">Ir al curso</b-button></b-card-footer>
  </b-card>
</template>

<script setup>
defineProps({ course: Object })
</script>

<style lang="scss" scoped>
.c-body {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .progress-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    .bar {
      display: flex;
      gap: 0.5rem;
      justify-content: space-between;
      flex-grow: 1;


      .white-slots {
        height: 0.5rem;
        width: 20%;
        background: white;
        border-radius: 0.5rem;
      }
    }
  }

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
