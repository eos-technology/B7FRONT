<template>
  <section class="token">
    <h2 class="h2-bold">Tokens</h2>
    <div class="token__grid">
      <div class="token__card token__card--blue">
        <ChartToken />
      </div>
      <div class="token__card token__card--blue">
        <h4 class="h4-bold">Token sale ends in</h4>
        <vue-countdown :time='formatMiliseconds(active.end)' v-slot="{ days, hours, minutes, seconds }">
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
          <p>${{ coinFormat(active.sold) }} pledget of ${{ coinFormat(active.maximum) }} goal</p>
          <b-progress variant="success" :value="active.sold" :max="active.maximum"></b-progress>
        </div>
        <b-button variant="primary" @click="isOpen = true">Comprar Tokens</b-button>
      </div>

      <div class="select">
        <label class="select__item" :class="select.q === 'Q1' ? 'select__item--blue' : ''">
          <b-form-radio v-model="select.q" :aria-describedby="ariaDescribedby" name="some-radios"
            value="Q1"></b-form-radio>
          <div class="select__text">
            <h3 class="h3-semibold">Q1</h3>
            <h5 class="h5-medium">Upcademy</h5>
          </div>
        </label>
        <label class="select__item" :class="select.q == 'Q2' ? 'bg-success' : ''">
          <b-form-radio v-model="select.q" :aria-describedby="ariaDescribedby" name="some-radios"
            value="Q2"></b-form-radio>
          <div class="select__text">
            <h3 class="h3-semibold">Q2</h3>
            <h5 class="h5-medium">Upcademy</h5>
          </div>
        </label>
        <label class="select__item" :class="select.q == 'Q3' ? 'bg-warning' : ''">
          <b-form-radio v-model="select.q" :aria-describedby="ariaDescribedby" name="some-radios"
            value="Q3"></b-form-radio>
          <div class="select__text">
            <h3 class="h3-semibold">Q3</h3>
            <h5 class="h5-medium">Upcademy</h5>
          </div>
        </label>
        <label class="select__item" :class="select.q == 'Q4' ? 'bg-light' : ''">
          <b-form-radio v-model="select.q" :aria-describedby="ariaDescribedby" name="some-radios"
            value="Q4"></b-form-radio>
          <div class="select__text">
            <h3 class="h3-semibold">Q4</h3>
            <h5 class="h5-medium">Upcademy</h5>
          </div>
        </label>
      </div>
      <!-- Q1 -->
      <section v-if="select.q === 'Q1'" class="token__card token__card--blue token__height">
        <h3 class="h3-bold">Feb 15 - Mar 15</h3>
        <div class="token__list">
          <div v-for="(item, index) in q1" :key="index" class="token__list-item">
            <i class="b7-check-line token__list-icon"></i>
            <p class="l-light">{{ item.item }}</p>
          </div>
        </div>
      </section>
      <!-- Q2 -->
      <section v-if="select.q === 'Q2'" class="token__card token__card--green token__height">
        <h3 class="h3-bold">Feb 15 - Mar 15</h3>
        <div class="token__list">
          <div v-for="(item, index) in q2" :key="index" class="token__list-item">
            <i class="b7-check-line token__list-icon bg-success"></i>
            <p class="l-light">{{ item.item }}</p>
          </div>
        </div>
      </section>
      <!-- Q3 -->
      <section v-if="select.q === 'Q3'" class="token__card token__card--yellow token__height">
        <h3 class="h3-bold">Feb 15 - Mar 15</h3>
        <div class="token__list">
          <div v-for="(item, index) in q3" :key="index" class="token__list-item">
            <i class="b7-check-line token__list-icon bg-warning"></i>
            <p class="l-light">{{ item.item }}</p>
          </div>
        </div>
      </section>
      <!-- Q4 -->
      <section v-if="select.q === 'Q4'" class="token__card token__card--cyan token__height">
        <h3 class="h3-bold">Feb 15 - Mar 15</h3>
        <div class="token__list">
          <div v-for="(item, index) in q3" :key="index" class="token__list-item">
            <i class="b7-check-line token__list-icon bg-light"></i>
            <p class="l-light">{{ item.item }}</p>
          </div>
        </div>
      </section>
    </div>
  </section>
  <!-- Modals Buy -->
  <section class="root">
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div class="modal__content">
          <img class="modal__close" :src="getFile('icons', 'close')" alt="" @click="isOpen = false" />
          <div class="modal__buy">
            <div class="modal__buy-header">
              <h2 class="h2-bold">Compra Tokens</h2>
              <img class="modal__img" src="@/assets/images/logo.webp" alt="" />
            </div>
            <div class="modal__buy-body" @click="isOpen = false">
              <div class="modal__buy-title">
                <h4 class="h4-semibold">Método de pago</h4>
                <p class="b-regular">
                  1USD = 1B7T. Send to the wallet the amount equivalent to B7T
                  that you want to receive
                </p>
              </div>
              <div class="modal__card">
                <div class="modal__card-box">
                  <img width="40" :src="getFile('images', 'crypto-ico', 'png')" alt="" />
                  <div>
                    <h6 class="h6-medium">Tether</h6>
                    <p class="l-light">USDT</p>
                  </div>
                </div>
                <img :src="getFile('icons', 'arrow-right')" alt="" />
              </div>
              <div class="modal__card">
                <div class="modal__card-box">
                  <img width="40" :src="getFile('images', 'crypto-ico', 'png')" alt="" />
                  <div>
                    <h6 class="h6-medium">Tether</h6>
                    <p class="l-light">USDT</p>
                  </div>
                </div>
                <img :src="getFile('icons', 'arrow-right')" alt="" />
              </div>
              <div class="modal__btns">
                <b-button variant="outline">Cancelar</b-button>
                <b-button variant="primary" @click="payment = true">Confirmar compra</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modals Payment -->

      <div class="modal" v-if="payment">
        <div class="modal__content">
          <img class="modal__close" :src="getFile('icons', 'close')" alt="" @click="payment = false" />
          <div class="modal__buy">
            <div class="modal__buy-header">
              <h2 class="h2-bold">Payment</h2>
              <img class="modal__img" src="@/assets/images/logo.webp" alt="" />
            </div>
            <div class="modal__buy-body" @click="payment = false">
              <div class="modal__buy-title">
                <h2 class="h2-semibold text-center">Payment address</h2>
              </div>

              <div class="modal__body-qr">
                <img :src="getFile('images', 'qr')" alt="" />
                <div class="modal__buy-title text-center">
                  <p class="b-regular">Quantity</p>
                  <h6 class="h6-regular">0 USD</h6>
                </div>
                <div class="modal__buy-title text-center">
                  <p class="b-regular">Wallet Address</p>
                  <h6 class="h6-regular">TQerdfbNi7SyfTzs6PSgesHjZqL1NVQm5X</h6>
                  <router-link class="modal__buy-link" to="#">Copy Wallet</router-link>
                </div>
              </div>

              <div class="modal__btns">
                <b-button variant="outline">Cancelar</b-button>
                <b-button variant="primary">Verify payment</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </section>
</template>

<script>
import { Countdown } from 'vue3-flip-countdown'
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
export default {
  components: {
    Countdown
  },
  data() {
    return {
      loading: false,
      modalPurchase: false
    }
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions('stage', ['getStageActive']),
    getData() {
      this.loading = true
      this.getStageActive().then(() => {
        this.loading = false
      })
    },
    calcPer(sold, max) {
      let total = (sold * 100) / max
      return total
    },
    formatDate(date) {
      return moment(date).format('Y-MM-DD HH:mm')
    }
  },
  computed: {
    ...mapState('stage', ['active'])
  }
}
</script>

<script setup>
import { ref } from "vue";
import ChartToken from "./charts/ChartToken.vue";

const value = ref(18090);
const max = ref(25000);

const isOpen = ref(false);
const payment = ref(false);

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

  &__content {
    display: grid;
    gap: 2.4rem;
    justify-items: end;
  }

  &__close {
    &:hover {
      filter: brightness(60%);
      cursor: pointer;
    }
  }

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

  &__body-qr {
    display: grid;
    gap: 2.4rem;
    justify-items: center;
    min-width: 58rem;
  }

  &__img {
    width: 17rem;
  }

  &__btns {
    display: flex;
    gap: 1.6rem;
    justify-content: flex-end;
  }

  &__card {
    cursor: pointer;
    padding: 1.6rem;
    display: flex;
    gap: 1.6rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.05);
    justify-content: space-between;

    &:hover {
      filter: brightness(60%);
    }

    &-box {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }
  }

  &__buy {
    display: grid;
    gap: 2.4rem;
    border-radius: 24px;
    overflow: hidden;
    background: #2a2b3d;

    &-link {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.3rem;
      text-decoration: none;
      margin-bottom: 1.6rem;
    }

    &-header {
      padding: 5rem 4.2rem;
      display: flex;
      gap: 1.6rem;
      justify-content: space-between;
      align-items: center;
      height: 16.2rem;
      background-image: url("@/assets/images/banner-modal.webp");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    &-body {
      padding: 0 2.4rem 2.4rem;
      display: grid;
      gap: 2.4rem;
    }

    &-title {
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
