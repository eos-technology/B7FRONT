<template>
  <main v-if="step === 1">
    <section>
      <h2 class="h2-bold">Trading Live</h2>
      <div class="banner">
        <div class="info">
          <img :src="getFile('images', 'logo', 'webp')" alt="" />
          <h2 class="h2-bold">Clase de Trading Operaciones Binarías</h2>
          <p class="b-medium">
            <i class="b7-calendar"></i>Lunes 30 de Junio - 18:30
          </p>
          <p class="b-regular">
            Nunc imperdiet diam vitae fringilla laoreet. Ut sodales purus eu
            diam posuere congue. Vestibulum eleifend ut ligula tempus blandit.
          </p>
        </div>
        <img :src="getFile('images', 'banner-image', 'webp')" alt="" />
      </div>
    </section>
    <section>
      <div class="search-filter">
        <div class="field-search">
          <b-form-input
            type="search"
            placeholder="search"
            class="b-light"
          ></b-form-input>
          <i class="b7-search"></i>
        </div>
      </div>
      <div class="courses-grid">
        <TradingClassCard
          v-for="(course, index) in 8"
          :key="index"
          @showCourse="step = 2"
          v-if="!show"
        />
      </div>
    </section>
  </main>
  <SingleClass v-if="step === 2" @back="step = 1" />
</template>

<script setup>
import { ref } from "vue";
import TradingClassCard from "./content/TradingClassCard.vue";
import SingleClass from "./content/SingleClass.vue";

const step = ref(1);
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;

    .banner {
      background: #0e4f66;
      border-radius: 1rem;
      display: flex;
      padding: 0 3rem;
      aspect-ratio: 41 / 12;
      align-items: flex-end;
      width: 100%;

      .info {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        align-self: center;
        width: 40%;
        padding: 2.4rem 0;
        @media (max-width: 450px) {
          width: 100%;
        }
        img {
          width: 10rem;
        }
      }

      img {
        width: 60%;
        @media (max-width: 450px) {
          display: none;
        }
      }
    }

    .courses-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 1.6rem;
      width: 100%;
    }
  }
}

.h2-bold {
  @media (max-width: 500px) {
    font-size: 2.4rem;
    line-height: 3rem;
  }
}
</style>
