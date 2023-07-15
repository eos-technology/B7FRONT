<template>
  <section class="add-trade">
    <h3 class="h3-medium">{{ $t('plans.addTrade') }}</h3>
    <b-form class="form" @submit.stop.prevent>
      <div class="form__content">
        <b-form-group id="input-active" :label="$t('plans.activeTrade')" label-for="active">
          <b-form-select
            id="active"
            v-model="form.active"
            :options="options"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-broker"
          :label="$t('plans.acountBroker')"
          label-for="broker"
        >
          <b-form-select
            id="broker"
            v-model="form.broker"
            :options="options"
          ></b-form-select>
        </b-form-group>
        <b-form-group id="input-gesture" :label="$t('plans.gestureTrade')" label-for="gesture">
          <b-form-select
            id="gesture"
            v-model="form.gesture"
            :options="options"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-date"
          :label="$t('plans.dateTrader')"
          label-for="date"
        >
          <b-form-input
            id="date"
            v-model="form.date"
            type="date"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-open"
          :label="$t('plans.time')"
          label-for="open"
        >
          <b-form-input
            id="open"
            v-model="form.open"
            placeholder="Input placerholder"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-price"
          :label="$t('plans.priceTrade')"
          label-for="price"
        >
          <b-form-input
            id="price"
            v-model="form.price"
            placeholder="Input placerholder"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-dateClose"
          :label="$t('plans.deadline')"
          label-for="dateClose"
        >
          <b-form-input
            id="dateClose"
            v-model="form.dateClose"
            type="date"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-timeClose"
          :label="$t('plans.closingTime')"
          label-for="timeClose"
        >
          <b-form-input
            id="timeClose"
            v-model="form.timeClose"
            placeholder="Input placerholder"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-close"
          :label="$t('plans.closingPrice')"
          label-for="close"
        >
          <b-form-input
            id="close"
            v-model="form.close"
            placeholder="Input placerholder"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-stopLoss"
          :label="$t('plans.priceStop')"
          label-for="stopLoss"
        >
          <b-form-input
            id="stopLoss"
            v-model="form.stopLoss"
            placeholder="Input placerholder"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-profit"
          :label="$t('plans.benefitBrute')"
          label-for="profit"
        >
          <b-form-input
            id="profit"
            v-model="form.profit"
            placeholder="Input placerholder"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-trade"
          :label="$t('plans.commission')"
          label-for="trade"
        >
          <b-form-input
            id="trade"
            v-model="form.trade"
            placeholder="Input placerholder"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-trading"
          :label="$t('plans.strategies')"
          label-for="trading"
        >
          <b-form-select
            id="trading"
            v-model="form.trading"
            :options="options"
          ></b-form-select>
        </b-form-group>
        <b-form-group id="input-status" :label="$t('plans.stateTrade')" label-for="status">
          <b-form-select
            id="status"
            v-model="form.status"
            :options="options"
          ></b-form-select>
        </b-form-group>
      </div>

      <div class="form__btns">
        <b-button variant="outline"><p class="btn-info">{{ $t('plans.cancel') }}</p></b-button>
        <b-button variant="primary" @click="isOpen = true">{{ $t('plans.add') }}</b-button>
      </div>
    </b-form>
  </section>

  <section class="root">
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div class="modal__body" @click="isOpen = false">
          <img
            class="modal__body-img"
            :src="getFile('images', 'auth', 'webp')"
            alt=""
          />
          <h3 class="h3-medium text-center">
            {{ $t('plans.message') }}
          </h3>
        </div>
      </div>
    </teleport>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const options = [
  { value: null, text: "Please select an option" },
  { value: "a", text: "This is First option" },
  { value: "b", text: "Selected Option" },
  { value: { C: "3PO" }, text: "This is an option with object value" },
  { value: "d", text: "This one is disabled", disabled: true },
];

const form = ref({
  active: null,
  broker: null,
  gesture: null,
  date: "",
  open: "",
  price: "",
  close: "",
  timeClose: "",
  dateClose: "",
  stopLoss: "",
  profit: "",
  trade: "",
  status: null,
  trading: null,
});
</script>

<style lang="scss" scoped>
.add-trade {
  padding: 2.4rem;
  display: grid;
  gap: 4.8rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  @media (max-width: 720px) {
    padding: 1.2rem;
  }
}

.form {
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem 1.6rem;
    margin-bottom: 4.8rem;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }
  &__btns {
    display: flex;
    justify-content: flex-end;
  }
}

</style>
