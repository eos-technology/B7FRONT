<template>
  <section class="dashboard">
    <h2 class="h2-bold">{{ $t('transactions.title') }}</h2>
    <!-- Cards -->
    <article class="dashboard__banner-cards">
      <div class="dashboard__banner-card">
        <img :src="getFile('images', 'brand', 'png')" alt="" />
        <div class="dashboard__banner-text">
          <div>
            <p class="b-regular">{{ $t('transactions.available') }}</p>
            <p class="l-bold">$0.000</p>
          </div>
          <i class="b7-dollar dashboard__banner-icon"></i>
        </div>
      </div>
      <div class="dashboard__banner-card">
        <img :src="getFile('images', 'brand', 'png')" alt="" />
        <div class="dashboard__banner-text">
          <div>
            <p class="b-regular">Total USD</p>
            <p class="l-bold">$0.000</p>
          </div>
          <i class="b7-dollar dashboard__banner-icon"></i>
        </div>
      </div>
      <div class="dashboard__banner-card">
        <img :src="getFile('images', 'brand', 'png')" alt="" />
        <div class="dashboard__banner-text">
          <div>
            <p class="b-regular">{{ $t('transactions.direct') }}</p>
            <p class="l-bold">$0.000</p>
          </div>
          <i class="b7-dollar dashboard__banner-icon"></i>
        </div>
      </div>
      <div class="dashboard__banner-card">
        <img :src="getFile('images', 'brand', 'png')" alt="" />
        <div class="dashboard__banner-text">
          <div>
            <p class="b-regular">{{ $t('transactions.indirect') }}</p>
            <p class="l-bold">$0.000</p>
          </div>
          <i class="b7-dollar dashboard__banner-icon"></i>
        </div>
      </div>
    </article>
    <!-- Chart Academy -->
    <ChartAcademy />
    <!-- Movements -->
    <Movements />
  </section>




</template>


<script setup>
import Movements from "./Movements.vue";
import ChartAcademy from "./charts/ChartAcademy.vue";


</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  gap: 2.4rem;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__banner {
    &-box {
      display: grid;
      gap: 1.6rem;
      .h2-bold {
        &-yellow {
          color: #ee8722;
        }
        @media (max-width: 600px) {
          text-align: center;
          font-size: 3rem;
          line-height: 3.8rem;
        }
      }
      padding: 2.4rem;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(14, 15, 52, 0.56) 21.06%,
        rgba(50, 54, 129, 0.21) 48.95%,
        rgba(14, 15, 52, 0.7) 77.67%
      );
      border-radius: 48px;
      width: 100%;
      height: 100%;
      @media (min-width: 600px) {
        background: none;
        background-image: url("@/assets/images/banner-dashboard.webp");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        grid-template-columns: 60% 1fr;
        padding: 9.8rem 8rem;
        align-items: center;
      }
      @media (min-width: 1100px) {
        grid-template-columns: 50% 1fr;
        padding: 7.8rem 6rem;
      }
      @media (max-width: 600px) {
        padding: 12px;
      }
      img {
        width: 100%;
      }
    }
    &-flex {
      display: grid;
      gap: 1.6rem;
    }
    &-cards {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;
    }
    &-card {
      flex: 1;
      display: flex;
      padding: 2px 24px 6px 4px;
      gap: 1.6rem;
      background: #201e61;
      border-radius: 16px;
    }
    &-text {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: space-between;
      width: 100%;
    }
    &-icon {
      padding: 10px;
      gap: 10px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.05);
      color: #ee8722;
    }
    &-refer {
      flex: 1;
    }
  }
  &__tokens {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    @media (max-width:1200px) {
      grid-template-columns: 1fr;
      
    }
  }
}

.down {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  &__card {
    display: flex;
    flex-direction: column;
    padding: 32px;
    justify-content: space-between;
    gap: 16px;
    flex: 1;
    align-self: stretch;
    border-radius: 16px;
    @media (max-width: 430px) {
      padding: 16px;
    }
    &--light-blue {
      border: 1px solid #3bbeee;
      background: rgba(59, 190, 238, 0.1);
    }
    &--purple {
      border: 1px solid #7d79e7;
      background: rgba(60, 57, 135, 0.1);
    }
    &--green {
      border: 1px solid var(--brand-verde, #48a254);
      background: rgba(72, 162, 84, 0.1);
    }
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    &-box {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    &-tag {
      display: flex;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      width: fit-content;
      gap: 4px;
      border-radius: 8px;
      background: #fff;
      @media (max-width: 340px) {
        width: 100%;
      }
    }
    .b7-cup {
      display: flex;
      padding: 8px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.1);
    }
    &-info {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      align-items: center;
    }
    &-body {
      display: grid;
      gap: 8px;
    }
  }
  &__users {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  &__user {
    display: grid;
    gap: 1.6rem;
    justify-items: center;
    @media (max-width: 430px) {
      gap: 1.2rem;
    }
    &-sm {
      width: 9rem;
      height: 9rem;
      @media (max-width: 430px) {
        width: 6rem;
        height: 7rem;
      }
    }
    &-big {
      width: 10rem;
      height: 10rem;
      @media (max-width: 430px) {
        width: 7rem;
        height: 7rem;
      }
    }
  }
  .sm-user {
    @media (max-width: 380px) {
      font-size: 10px;
    }
  }
  .big-user {
    @media (max-width: 380px) {
      font-size: 12px;
    }
    &-bold {
      @media (max-width: 430px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}

.bar {
  display: grid;
  gap: 8px;
  &__progress {
    background-color: #fff;
    height: 8px;
  }
  &__flex {
    display: flex;
    justify-content: space-between;
  }
  &__content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

.token {
  display: grid;
  gap: 2.4rem;
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    @media ((max-width: 1100px)) {
      grid-template-columns: 1fr;
      gap: 2.4rem;
    }
  }
  &__card {
    display: flex;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    border-radius: 16px;
    &--blue {
      border: 1px solid #7d79e7;
      background: rgba(60, 57, 135, 0.1);
    }
    &--green {
      border: 1px solid var(--brand-verde, #48a254);
      background: rgba(73, 135, 73, 0.1);
    }
    &--yellow {
      border: 1px solid var(--inputs-radio-checkbox-toggle-active, #ee8722);
      background: rgba(237, 135, 34, 0.1);
    }
    &--cyan {
      border: 1px solid var(--brand-azul-claro, #3bbeee);
      background: rgba(59, 190, 238, 0.1);
    }
    @media ((max-width: 600px)) {
      padding: 1.2rem;
    }
  }
  &__progress {
    display: grid;
    gap: 8px;
  }
  &__height {
    height: fit-content;
  }
  &__list {
    display: grid;
    gap: 1.6rem;
    &-item {
      display: flex;
      gap: 1.6rem;
      align-items: center;
    }
    &-icon {
      background-color: #3c3987;
      border-radius: 100px;
      width: 2.4rem;
      height: 2.4rem;
      display: grid;
      place-content: center;
    }
  }
}

.count {
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  gap: 2.4rem;
  @media (max-width:700px) {
    grid-template-columns: 1fr;
  }
  &__date {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    &-box {
      display: grid;
      gap: 2.4rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__line {
    height: 100%;
    width: 1px;
    background-color: #fff;
  }
  &__box {
    display: grid;
    gap: 8px;
    text-align: center;
    &-data {
      display: flex;
      padding: 16px;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.1);
    }
  }
  &__flex {
    display: flex;
    width: 100%;
    gap: 2.4rem;
  }
}



</style>
