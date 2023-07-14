<template>
  <section class="member">
    <h2 class="h2-bold">{{ $t('member.membership') }}</h2>
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
            <h3 class="h3-semibold">{{ $t('member.basic') }}</h3>
            <h5 class="h5-medium">{{ $t('member.upcademy') }}</h5>
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
            <h5 class="h5-medium">{{ $t('member.upcademy') }}</h5>
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
            <h5 class="h5-medium">{{ $t('member.upcademy') }}</h5>
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
            <h3 class="h3-semibold">{{ $t('member.personalized') }}</h3>
            <h5 class="h5-medium">{{ $t('member.upcademy') }}</h5>
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
        <h3 class="h3-bold">{{ $t('member.benefits') }}</h3>
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
          <b-button variant="info">{{ $t('member.delete') }}</b-button>
          <b-button @click="$emit('showMembership')">{{ $t('member.edit') }}</b-button>
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
        <h3 class="h3-bold">{{ $t('member.premium') }}</h3>
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
          <b-button variant="info">{{ $t('member.delete') }}</b-button>
          <b-button @click="$emit('showMembership')" variant="success"
            >{{ $t('member.edit') }}</b-button
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
        <h3 class="h3-bold">{{ $t('member.prime') }}</h3>
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
          <b-button variant="info">{{ $t('member.delete') }}</b-button>
          <b-button @click="$emit('showMembership')" variant="primary">{{ $t('member.edit') }}</b-button>
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
        <h3 class="h3-bold">{{ $t('member.perso') }}</h3>
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
          :label="$t('member.investment')"
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
           {{ $t('member.minimum') }} $0,00
          </p>
        </b-form-group>
          <div class="member__card-btns">
          <b-button variant="info">{{ $t('member.delete') }}</b-button>
          <b-button @click="$emit('showMembership')" variant="light">{{ $t('member.edit') }}</b-button>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

defineEmits("showMembership");

const select = ref({
  q: "Q1",
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
.member {
  display: grid;
  gap: 2.4rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  padding: 24px 24px 32px 24px;
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
