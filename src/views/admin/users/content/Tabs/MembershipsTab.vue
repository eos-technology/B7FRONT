<template>
  <section class="member" v-if="step === 1">
    <h2 class="h2-bold">{{ $t('membershipAdmin.title') }}</h2>
    <div class="member__grid">
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
            <h3 class="h3-semibold">{{ $t('membershipAdmin.basic') }}</h3>
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
            <h3 class="h3-semibold">Premium</h3>
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
            <h3 class="h3-semibold">Prime</h3>
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
            <h3 class="h3-semibold">{{ $t('membershipAdmin.personalized') }}</h3>
            <h5 class="h5-medium">Upcademy</h5>
          </div>
        </label>
      </div>
      <!-- Q1 -->
      <section
        v-if="select.q === 'Q1'"
        class="member__card member__card--blue member__height"
      >
        <video
          class="member__video"
          src="@/assets/video/Plan1.mp4"
          autoplay
          loop
        ></video>
        <div class="anim"></div>
        <h3 class="h3-bold">{{ $t('membershipAdmin.benefitsBasic') }}</h3>
        <div class="member__list">
          <div
            v-for="(item, index) in q1"
            :key="index"
            class="member__list-item"
          >
            <p class="l-light">{{ item.item }}</p>
            <i :class="`b7-${item.icon}`"></i>
          </div>
        </div>
        <div class="member__card-btns">
          <b-button class="w-100" @click="$emit('showMembership')"
            >{{ $t('membershipAdmin.buyPackage') }}</b-button
          >
        </div>
      </section>
      <!-- Q2 -->
      <section
        v-if="select.q === 'Q2'"
        class="member__card member__card--green member__height"
      >
        <video
          class="member__video"
          src="@/assets/video/Plan2.mp4"
          autoplay
          loop
        ></video>
        <h3 class="h3-bold">{{ $t('membershipAdmin.benefitsPrimium') }}</h3>
        <div class="member__list">
          <div
            v-for="(item, index) in q2"
            :key="index"
            class="member__list-item"
          >
            <p class="l-light">{{ item.item }}</p>
            <i :class="`b7-${item.icon}`"></i>
          </div>
        </div>
        <div class="member__card-btns">
          <b-button
            class="w-100"
            @click="$emit('showMembership')"
            variant="success"
            >{{ $t('membershipAdmin.buyPackage') }}</b-button
          >
        </div>
      </section>
      <!-- Q3 -->
      <section
        v-if="select.q === 'Q3'"
        class="member__card member__card--yellow member__height"
      >
        <video
          class="member__video"
          src="@/assets/video/Plan3.mp4"
          autoplay
          loop
        ></video>
        <h3 class="h3-bold">{{ $t('membershipAdmin.benefitsPrime') }}</h3>
        <div class="member__list">
          <div
            v-for="(item, index) in q3"
            :key="index"
            class="member__list-item"
          >
            <p class="l-light">{{ item.item }}</p>
            <i :class="`b7-${item.icon}`"></i>
          </div>
        </div>
        <div class="member__card-btns">
          <b-button
            @click="$emit('showMembership')"
            class="w-100"
            variant="primary"
            >{{ $t('membershipAdmin.buyPackage') }}</b-button
          >
        </div>
      </section>
      <!-- Q4 -->
      <section
        v-if="select.q === 'Q4'"
        class="member__card member__card--cyan member__height"
      >
        <video
          class="member__video"
          src="@/assets/video/Plan4.mp4"
          autoplay
          loop
        ></video>
        <h3 class="h3-bold">{{ $t('membershipAdmin.benefitsPersonalized') }}</h3>
        <div class="member__list">
          <div
            v-for="(item, index) in q4"
            :key="index"
            class="member__list-item"
          >
            <p class="l-light">{{ item.item }}</p>
            <i :class="`b7-${item.icon}`"></i>
          </div>
        </div>
        <b-form-group
          id="input-invest"
          :label="$t('membershipAdmin.investment')"
          label-for="invest"
        >
          <b-form-input
            id="invest"
            v-model="form.invest"
            placeholder="0"
            type="number"
            required
          ></b-form-input>
          <p class="b-regular mt-2" style="color: #626c87">
            {{ $t('membershipAdmin.amount') }} $0,00
          </p>
        </b-form-group>
        <div class="member__card-btns">
          <b-button
            @click="$emit('showMembership')"
            class="w-100"
            variant="light"
            >{{ $t('membershipAdmin.buyPackage') }}</b-button
          >
        </div>
      </section>
    </div>
    <div class="member__btns">
      <b-button variant="outline">{{ $t('membershipAdmin.cancel') }}</b-button>
      <b-button variant="primary" @click="step = 2">{{ $t('membershipAdmin.continue') }}</b-button>
    </div>
  </section>

  <section class="time" v-if="step === 2">
    <h3 class="h3-medium">{{ $t('membershipAdmin.selectTime') }}</h3>
    <div class="time__grid">
      <label
        class="time__card"
        :class="select.time == 'profit' ? 'bg-secondary' : ''"
      >
        <div class="time__logo">
          <img :src="getFile('images', 'brand', 'png')" alt="" />
          <p class="time__value">3M</p>
        </div>
        <div class="time__card-radio">
          <b-form-radio
            v-model="select.time"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="profit"
          ></b-form-radio>
          <div class="time__card-box w-100">
            <h4 class="h4-semibold">{{ $t('membershipAdmin.threeMonths') }}</h4>
            <div class="time__card-grid">
              <h5 class="h5-regular">{{ $t('membershipAdmin.profit') }}</h5>
              <h4 class="h4-bold">9%</h4>
            </div>
          </div>
        </div>
      </label>
      <label
        class="time__card"
        :class="select.time == 'six' ? 'bg-secondary' : ''"
      >
        <div class="time__logo">
          <img :src="getFile('images', 'brand', 'png')" alt="" />
          <p class="time__value">6M</p>
        </div>
        <div class="time__card-radio">
          <b-form-radio
            v-model="select.time"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="six"
          ></b-form-radio>
          <div class="time__card-box w-100">
            <h4 class="h4-semibold">{{ $t('membershipAdmin.sixMonths') }}</h4>
            <div class="time__card-grid">
              <h5 class="h5-regular">{{ $t('membershipAdmin.profit') }}</h5>
              <h4 class="h4-bold">18%</h4>
            </div>
          </div>
        </div>
      </label>
      <label
        class="time__card"
        :class="select.time == 'twelve' ? 'bg-secondary' : ''"
      >
        <div class="time__logo">
          <img :src="getFile('images', 'brand', 'png')" alt="" />
          <p class="time__value">12M</p>
        </div>
        <div class="time__card-radio">
          <b-form-radio
            v-model="select.time"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="twelve"
          ></b-form-radio>
          <div class="time__card-box w-100">
            <h4 class="h4-semibold">{{ $t('membershipAdmin.twelveMonths') }}</h4>
            <div class="time__card-grid">
              <h5 class="h5-regular">{{ $t('membershipAdmin.profit') }}</h5>
              <h4 class="h4-bold">36%</h4>
            </div>
          </div>
        </div>
      </label>
    </div>
    <div class="time__btns">
      <b-button variant="outline" @click="step = 1">{{ $t('membershipAdmin.cancel') }}</b-button>
      <b-button variant="primary">{{ $t('membershipAdmin.confirmPackage') }}</b-button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

defineEmits("showMembership");

const step = ref(1);

const select = ref({
  q: "Q1",
  time: "profit",
});

const form = ref({
  invest: "",
});

const q1 = [
  { item: "Trading plans", icon: "close" },
  { item: "Trading Live", icon: "close" },
  { item: "Signals", icon: "check-line" },
  { item: "Academy", icon: "close" },
  { item: "Crypto Wallets", icon: "check-line" },
  { item: "Team Chat", icon: "check-line" },
  { item: "Transaction Book", icon: "check-line" },
  { item: "Referrals Benefits", icon: "check-line" },
];

const q2 = [
  { item: "Trading plans", icon: "close" },
  { item: "Trading Live", icon: "close" },
  { item: "Signals", icon: "check-line" },
  { item: "Academy", icon: "close" },
  { item: "Crypto Wallets", icon: "check-line" },
  { item: "Team Chat", icon: "check-line" },
  { item: "Transaction Book", icon: "check-line" },
  { item: "Referrals Benefits", icon: "check-line" },
];

const q3 = [
  { item: "Trading plans", icon: "close" },
  { item: "Trading Live", icon: "close" },
  { item: "Signals", icon: "check-line" },
  { item: "Academy", icon: "close" },
  { item: "Crypto Wallets", icon: "check-line" },
  { item: "Team Chat", icon: "check-line" },
  { item: "Transaction Book", icon: "check-line" },
  { item: "Referrals Benefits", icon: "check-line" },
];

const q4 = [
  { item: "Trading plans", icon: "close" },
  { item: "Trading Live", icon: "close" },
  { item: "Signals", icon: "check-line" },
  { item: "Academy", icon: "close" },
  { item: "Crypto Wallets", icon: "check-line" },
  { item: "Team Chat", icon: "check-line" },
  { item: "Transaction Book", icon: "check-line" },
  { item: "Referrals Benefits", icon: "check-line" },
];
</script>

<style lang="scss" scoped>
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
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
  }
  &__card {
    flex: 1 0 25rem;
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
.member {
  &__btns {
    display: flex;
    justify-content: flex-end;
    margin-top: 3.2rem;
  }

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
    &-btns {
      display: flex;
      justify-content: flex-end;
    }
    &--blue {
      border: 1px solid #7d79e7;
      background: rgba(60, 57, 135, 0.1);
      .b7-check-line {
        background-color: #3c3987;
        border-radius: 50%;
      }
      .b7-close {
        border-radius: 150px;
        background: rgba(253, 236, 236, 0.3);
      }
    }
    &--green {
      border: 1px solid var(--brand-verde, #48a254);
      background: rgba(73, 135, 73, 0.1);
      .b7-check-line {
        background-color: #48a254;
        border-radius: 50%;
      }
      .b7-close {
        border-radius: 150px;
        background: rgba(253, 236, 236, 0.3);
      }
    }
    &--yellow {
      border: 1px solid var(--inputs-radio-checkbox-toggle-active, #ee8722);
      background: rgba(237, 135, 34, 0.1);
      .b7-check-line {
        background-color: #ee8722;
        border-radius: 50%;
      }
      .b7-close {
        border-radius: 150px;
        background: rgba(253, 236, 236, 0.3);
      }
    }
    &--cyan {
      border: 1px solid var(--brand-azul-claro, #3bbeee);
      background: rgba(59, 190, 238, 0.1);
      .b7-check-line {
        background-color: #3bbeee;
        border-radius: 50%;
      }
      .b7-close {
        border-radius: 150px;
        background: rgba(253, 236, 236, 0.3);
      }
    }
    @media ((max-width: 600px)) {
      padding: 1.2rem;
    }
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
      justify-content: space-between;
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
  &__video {
    width: 100%;
  }
}

.select {
  display: grid;
  gap: 2.4rem;
  height: fit-content;
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
  &__text {
    h3 {
      @media (max-width: 450px) {
        font-size: 2.4rem;
      }
    }
  }
}
</style>
