<template>
  <main>
    <b-button variant="transparent" class="b-light" @click="$emit('back')"><i class="b7-back"></i>
      {{ $t('membership.goBack') }}</b-button>
    <section class="d-flex justify-content-center">
      <!-- Purchase: select payment method -->
      <div class="purchase-box" v-if="purchaseStep === 1">
        <div class="purchase-header">
          <h2 class="h2-bold">{{ $t('membership.purchase') }}</h2>
          <img :src="getFile('images', 'logo', 'webp')" alt="" />
        </div>
        <div class="purchase-content d-flex flex-column">
          <div>
            <h4 class="h4-semibold">{{ $t('membership.chooseTime') }}</h4>
          </div>
          <!-- Radio buttons -->

          <section class="time">
            <div class="time__grid">
              <label class="time__card" :class="select.time == 'one' ? 'bg-secondary' : ''">
                <div class="time__logo">
                  <img :src="getFile('images', 'brand', 'png')" alt="" />
                  <p class="time__value">1M</p>
                </div>
                <div class="time__card-radio">
                  <b-form-radio v-model="select.time" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="one"></b-form-radio>
                  <div class="time__card-box w-100">
                    <h4 class="h4-semibold">{{ $t('membership.oneMonth') }}</h4>
                    <div class="time__card-grid">
                      <h5 class="h5-regular">{{ $t('membership.profit') }}</h5>
                      <h4 class="h4-bold">5%</h4>
                    </div>
                  </div>
                </div>
              </label>

              <label class="time__card" :class="select.time == 'profit' ? 'bg-secondary' : ''">
                <div class="time__logo">
                  <img :src="getFile('images', 'brand', 'png')" alt="" />
                  <p class="time__value">3M</p>
                </div>
                <div class="time__card-radio">
                  <b-form-radio v-model="select.time" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="profit"></b-form-radio>
                  <div class="time__card-box w-100">
                    <h4 class="h4-semibold">{{ $t('membership.threeMonths') }}</h4>
                    <div class="time__card-grid">
                      <h5 class="h5-regular">{{ $t('membership.profit') }}</h5>
                      <h4 class="h4-bold">9%</h4>
                    </div>
                  </div>
                </div>
              </label>

              <label class="time__card" :class="select.time == 'six' ? 'bg-secondary' : ''">
                <div class="time__logo">
                  <img :src="getFile('images', 'brand', 'png')" alt="" />
                  <p class="time__value">6M</p>
                </div>
                <div class="time__card-radio">
                  <b-form-radio v-model="select.time" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="six"></b-form-radio>
                  <div class="time__card-box w-100">
                    <h4 class="h4-semibold">{{ $t('membership.sixMonths') }}</h4>
                    <div class="time__card-grid">
                      <h5 class="h5-regular">{{ $t('membership.profit') }}</h5>
                      <h4 class="h4-bold">18%</h4>
                    </div>
                  </div>
                </div>
              </label>

              <label class="time__card" :class="select.time == 'twelve' ? 'bg-secondary' : ''">
                <div class="time__logo">
                  <img :src="getFile('images', 'brand', 'png')" alt="" />
                  <p class="time__value">12M</p>
                </div>
                <div class="time__card-radio">
                  <b-form-radio v-model="select.time" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="twelve"></b-form-radio>
                  <div class="time__card-box w-100">
                    <h4 class="h4-semibold">{{ $t('membership.twelveMonths') }}</h4>
                    <div class="time__card-grid">
                      <h5 class="h5-regular">{{ $t('membership.profit') }}</h5>
                      <h4 class="h4-bold">36%</h4>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </section>
          <div class="purchase-buttons d-flex justify-content-end mt-3">
            <b-button variant="outline-primary">{{ $t('membership.cancel') }}</b-button>
            <b-button variant="primary" @click="purchaseStep = 2">{{ $t('membership.confirmPurchase') }}</b-button>
          </div>
        </div>
      </div>
      <!-- Purchase: select payment method -->
      <div class="purchase-box" v-if="purchaseStep === 2">
        <div class="purchase-header">
          <h2 class="h2-bold">{{ $t('membership.purchase') }}</h2>
          <img :src="getFile('images', 'logo', 'webp')" alt="" />
        </div>
        <div class="purchase-content d-flex flex-column">
          <div>
            <h4 class="h4-semibold">{{ $t('membership.paymentMethod') }}</h4>
            <p class="b-regular">
              1USD = 1B7T. {{ $t('membership.paymentMethodLegend') }}
            </p>
          </div>
          <div class="item d-flex justify-content-between align-items-center">
            <img :src="getFile('images', 'crypto-ico', 'png')" alt="" />
            <div class="d-flex flex-column mr-auto">
              <span class="h6-medium">Tether</span>
              <span class="l-light">USDT</span>
            </div>
            <i class="b7-arrow-down"></i>
          </div>
          <div class="item d-flex justify-content-between align-items-center">
            <img :src="getFile('images', 'crypto-ico', 'png')" alt="" />
            <div class="d-flex flex-column mr-auto">
              <span class="h6-medium">B7</span>
              <span class="l-light">B7T</span>
            </div>
            <i class="b7-arrow-down"></i>
          </div>
          <div class="purchase-buttons d-flex justify-content-end mt-3">
            <b-button variant="outline-primary">{{ $t('membership.cancel') }}</b-button>
            <b-button variant="primary" @click="purchaseStep = 3">{{ $t('membership.confirmPurchase') }}</b-button>
          </div>
        </div>
      </div>
      <!-- Purchase: payment QR -->
      <div class="purchase-box" v-if="purchaseStep === 3">
        <div class="purchase-header">
          <h2 class="h2-bold">{{ $t('membership.payment') }}</h2>
          <img :src="getFile('images', 'logo', 'webp')" alt="" />
        </div>
        <div class="purchase-content d-flex flex-column align-items-center">
          <div>
            <h2 class="h2-semibold">{{ $t('membership.paymentAddress') }}</h2>
          </div>
          <img :src="getFile('images', 'qr', 'svg')" alt="" />
          <div>
            <p class="b-regular">{{ $t('membership.quantity') }}</p>
            <p class="h6-regular">0 USD</p>
          </div>
          <div class="d-flex flex-column align-content-center">
            <span class="b-regular text-center">{{ $t('membership.walletAddress') }}</span>
            <span class="h6-regular text-center">TQerdfbNi7SyfTzs6PSgesHjZqL1NVQm5X</span>
            <b-button variant="transparent" class="text-primary">Copy Wallet</b-button>
          </div>
          <div class="purchase-buttons d-flex justify-content-end mt-3 align-self-end">
            <b-button variant="outline-primary">{{ $t('membership.cancel') }}</b-button>
            <b-button variant="primary" @click="purchaseStep = 4">{{ $t('membership.verifyPayment') }}</b-button>
          </div>
        </div>
      </div>
      <!-- Purchase: successful -->
      <div class="purchase-box" v-if="purchaseStep === 4">
        <div class="purchase-header">
          <h2 class="h2-bold">{{ $t('membership.purchase') }}</h2>
          <img :src="getFile('images', 'logo', 'webp')" alt="" />
        </div>
        <div class="purchase-content d-flex flex-column align-items-center">
          <i class="b7-done"></i>
          <div>
            <p class="b-regular text-center">{{ $t('membership.successfulPurchase') }}</p>
            <p class="h6-regular text-center">
              {{ $t('membership.successfullPurchaseLegend') }}
            </p>
          </div>
          <div class="purchase-buttons d-flex justify-content-end mt-3 align-self-end">
            <b-button variant="outline-primary">{{ $t('membership.cancel') }}</b-button>
            <b-button variant="primary" @click="$emit('back')">{{ $t('membership.continueShopping') }}</b-button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";
defineEmits("back");
let purchaseStep = ref(1);

const select = ref({
  q: "Q1",
  time: "one",
});
</script>
<style lang="scss" scoped>
.purchase-box {
  width: 45%;
  min-width: 890px;
  background: #2a2b3d;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 1100px) {
    min-width: unset;
    width: 100%;
  }

  .purchase-header {
    background: url(../../../assets/images/bg-header-modal.webp);
    padding: 3.25rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
    background-position: center bottom;

    img {
      height: 4rem;
    }
  }

  .purchase-content {
    padding: 24px;
    gap: 24px;

    .item {
      gap: 16px;
      padding: 16px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.05);

      img {
        width: 40px;
        height: 40px;
      }

      .l-light {
        color: #b5c2d7;
      }

      i {
        border-radius: 6.25rem;
        background: rgba(255, 255, 255, 0.1);
        padding: 8px;
        font-size: 16px;
        transform: rotate(-90deg);
      }
    }

    .purchase-buttons {
      gap: 16px;
    }

    i.b7-done {
      color: #48a254;
      font-size: 78px;
    }
  }
}

.time {
  display: grid;
  gap: 3.2rem;

  &__logo {
    width: 10rem;
    margin: 0 auto;
    position: relative;
  }

  &__btns {
    display: flex;
    justify-content: flex-end;
  }

  &__value {
    position: absolute;
    font-size: 15px;
    font-style: italic;
    font-weight: 900;
    line-height: 21px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    display: flex;
    padding: 24px;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    flex: 1 0 0;
    border-radius: 24px;
    border: 1px solid var(--brand-border, rgba(255, 255, 255, 0.2));

    &-radio {
      display: flex;
      align-items: center;
      gap: 2.4rem;
      width: 100%;
    }

    &-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
