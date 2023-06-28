<template>
  <section class="token">
    <h2 class="h2-bold">Tokens</h2>
    <div class="token__grid">
      <div class="token__card token__card--blue"><ChartToken /></div>
      <div class="token__card token__card--blue">
        <h4 class="h4-bold">Token sale ends in</h4>

        <vue-countdown
          :time="4 * 24 * 60 * 60 * 1000"
          v-slot="{ days, hours, minutes, seconds }"
        >
          <div class="count">
            <div class="count__box">
              <p class="l-medium">Days</p>
              <div class="count__box-data">{{ days }}</div>
            </div>
            <div class="count__box">
              <p class="l-medium">Hours</p>
              <div class="count__box-data">{{ hours }}</div>
            </div>
            <div class="count__box">
              <p class="l-medium">Minutes</p>
              <div class="count__box-data">{{ minutes }}</div>
            </div>
            <div class="count__box">
              <p class="l-medium">Seconds</p>
              <div class="count__box-data">{{ seconds }}</div>
            </div>
          </div>
        </vue-countdown>
        <div class="token__progress">
          <p>${{ value }} pledget of ${{ max }} goal</p>
          <b-progress variant="success" :value="value" :max="max"></b-progress>
        </div>
        <b-button variant="primary" @click="isOpen = true"
          >Comprar Tokens</b-button
        >
      </div>

      <div class="select">
        <label
          class="select__item"
          :class="select.q === 'Q1' ? 'select__item--blue' : ''"
        >
          <b-form-radio
            v-model="select.q"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Q1"
          ></b-form-radio>
          <div class="select__text">
            <h3 class="h3-semibold">Q1</h3>
            <h5 class="h5-medium">Upcademy</h5>
          </div>
        </label>
        <label
          class="select__item"
          :class="select.q == 'Q2' ? 'bg-success' : ''"
        >
          <b-form-radio
            v-model="select.q"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Q2"
          ></b-form-radio>
          <div class="select__text">
            <h3 class="h3-semibold">Q2</h3>
            <h5 class="h5-medium">Upcademy</h5>
          </div>
        </label>
        <label
          class="select__item"
          :class="select.q == 'Q3' ? 'bg-warning' : ''"
        >
          <b-form-radio
            v-model="select.q"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Q3"
          ></b-form-radio>
          <div class="select__text">
            <h3 class="h3-semibold">Q3</h3>
            <h5 class="h5-medium">Upcademy</h5>
          </div>
        </label>
        <label class="select__item" :class="select.q == 'Q4' ? 'bg-light' : ''">
          <b-form-radio
            v-model="select.q"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Q4"
          ></b-form-radio>
          <div class="select__text">
            <h3 class="h3-semibold">Q4</h3>
            <h5 class="h5-medium">Upcademy</h5>
          </div>
        </label>
      </div>
      <!-- Q1 -->
      <section
        v-if="select.q === 'Q1'"
        class="token__card token__card--blue token__height"
      >
        <h3 class="h3-bold">Feb 15 - Mar 15</h3>
        <div class="token__list">
          <div
            v-for="(item, index) in q1"
            :key="index"
            class="token__list-item"
          >
            <i class="b7-check-line token__list-icon"></i>
            <p class="l-light">{{ item.item }}</p>
          </div>
        </div>
      </section>
      <!-- Q2 -->
      <section
        v-if="select.q === 'Q2'"
        class="token__card token__card--green token__height"
      >
        <h3 class="h3-bold">Feb 15 - Mar 15</h3>
        <div class="token__list">
          <div
            v-for="(item, index) in q2"
            :key="index"
            class="token__list-item"
          >
            <i class="b7-check-line token__list-icon bg-success"></i>
            <p class="l-light">{{ item.item }}</p>
          </div>
        </div>
      </section>
      <!-- Q3 -->
      <section
        v-if="select.q === 'Q3'"
        class="token__card token__card--yellow token__height"
      >
        <h3 class="h3-bold">Feb 15 - Mar 15</h3>
        <div class="token__list">
          <div
            v-for="(item, index) in q3"
            :key="index"
            class="token__list-item"
          >
            <i class="b7-check-line token__list-icon bg-warning"></i>
            <p class="l-light">{{ item.item }}</p>
          </div>
        </div>
      </section>
      <!-- Q4 -->
      <section
        v-if="select.q === 'Q4'"
        class="token__card token__card--cyan token__height"
      >
        <h3 class="h3-bold">Feb 15 - Mar 15</h3>
        <div class="token__list">
          <div
            v-for="(item, index) in q3"
            :key="index"
            class="token__list-item"
          >
            <i class="b7-check-line token__list-icon bg-light"></i>
            <p class="l-light">{{ item.item }}</p>
          </div>
        </div>
      </section>
    </div>
  </section>
  <!-- Modals Buy-->
  <section class="root">
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div class="modal__buy">
          <div class="modal__buy-header">
            <img
              class="modal__body-top"
              :src="getFile('images', 'banner-modal', 'webp')"
              alt=""
            />
          </div>
          <div class="modal__buy-body" @click="isOpen = false">
            <div class="modal__buy-title">
              <h4 class="h4-semibold">Método de pago</h4>
              <p class="b-regular">1USD = 1B7T. Send to the wallet the amount equivalent to B7T that you want to receive</p>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ChartToken from "./charts/ChartToken.vue";

const value = ref(18090);
const max = ref(25000);

const isOpen = ref(false);

const select = ref({
  q: "Q1",
});

const q1 = [
  { item: "67 % bonus" },
  { item: "$0.000/ token" },
  { item: "Token creation" },
  { item: "Creations white book" },
  { item: "Distribution" },
  { item: "Creation of Upacademy" },
];

const q2 = [
  { item: "67 % bonus" },
  { item: "$0.000/ token" },
  { item: "Venta privada" },
  { item: "Exchange" },
];

const q3 = [
  { item: "67 % bonus" },
  { item: "$0.000/ token" },
  { item: "Coinmarketcap" },
  { item: "Price trackers" },
];
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(12, 12, 37, 0.7);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__body {
    border-radius: 24px;
    background: #2a2b3d;
    display: flex;
    width: 728px;
    padding: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    &-img {
      width: 30rem;
    }
  }
  &__buy {
    display: grid;
    gap: 2.4rem;
    border-radius: 24px;
    background: #2a2b3d;
    &-body{
      padding:0 2.4rem 2.4rem;
    }
    &-title{
      display: grid;
      gap: 8px;
    } 

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
  gap: 2.4rem;
  grid-template-columns: repeat(4, 1fr);
  @media ((max-width: 600px)) {
    grid-template-columns: repeat(2, 1fr);
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
}

.select {
  display: grid;
  gap: 2.4rem;
  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    gap: 24px;
    border-radius: 24px;
    border: 1px solid var(--brand-border, rgba(255, 255, 255, 0.2));
    &--blue {
      background-color: #3c3987;
      border: none;
    }
    &--green {
      background-color: #48a254;
      border: none;
    }
  }
}
</style>
