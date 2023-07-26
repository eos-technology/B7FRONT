<template>
  <section class="add-trade">
    <b-form class="form" @submit.stop.prevent>
      <h3 class="h3-medium">{{ $t('usersInformation.title') }}</h3>
      <label for="user" class="user__profile">
        <img :src="getFile('icons', 'avatar')" alt="" />
        <div>
          <h4 class="h4-bold">Ricardo Gomez Armani</h4>
          <p class="l-medium user__text">{{ $t('usersInformation.changePhoto') }}</p>
        </div>
        <input class="user__input" type="file" id="user" />
      </label>

      <div class="form__content">
        <!-- Name -->
        <b-form-group id="input-name" :label="$t('usersInformation.name')" label-for="name">
          <b-form-input id="name" v-model="form.name" placeholder="Input placerholder" required></b-form-input>
        </b-form-group>
        <!-- Email -->
        <b-form-group id="input-email" :label="$t('usersInformation.email')" label-for="email">
          <b-form-input id="email" v-model="form.email" placeholder="Input placerholder" required
            type="email"></b-form-input>
        </b-form-group>
        <!-- Country -->
        <b-form-group id="input-country" :label="$t('usersInformation.country')" label-for="country">
          <b-form-select id="country" v-model="form.country" :options="options"></b-form-select>
        </b-form-group>
        <!-- Phone -->
        <b-form-group id="input-phone" :label="$t('usersInformation.phone')" label-for="phone">
          <b-form-input id="phone" v-model="form.phone" placeholder="Input placerholder" type="tel"
            required></b-form-input>
        </b-form-group>
        <!-- Teacher -->
        <b-form-group id="input-teacher" :label="$t('usersInformation.teacher')" label-for="teacher">
          <b-form-select id="teacher" v-model="form.teacher" :options="options"></b-form-select>
        </b-form-group>
        <!-- Signals -->
        <b-form-group id="input-signal" :label="$t('usersInformation.signal')" label-for="signal">
          <b-form-select id="signal" v-model="form.signal" :options="options"></b-form-select>
        </b-form-group>
        <!-- Initial pay -->
        <b-form-group id="input-pay" :label="$t('usersInformation.pay')" label-for="pay">
          <b-form-select id="pay" v-model="form.pay" :options="options"></b-form-select>
        </b-form-group>
      </div>
      <div class="2fa-module d-flex flex-column gap-4">
        <h5 class="h5-medium">{{ $t('usersInformation.enableFa') }}</h5>
        <div class="field d-flex justify-content-between align-items-center gap-3">
          <div class="label d-flex flex-column">
            <span class="b-medium">{{ $t('usersInformation.enable') }}</span>
            <span class="sm-light">{{ $t('usersInformation.enableDisable') }}</span>
          </div>
          <b-form-checkbox switch></b-form-checkbox>
        </div>
      </div>

      <div class="form__btns">
        <b-button variant="info">{{ $t('usersInformation.delete') }}</b-button>
        <div class="d-flex gap-2">
          <b-button variant="outline">
            <p class="btn-info">{{ $t('usersInformation.cancel') }}</p>
          </b-button>
          <b-button variant="primary" @click="isOpen = true">{{ $t('usersInformation.create') }}</b-button>
        </div>
      </div>
    </b-form>
  </section>

  <section class="root">
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div class="modal__body" @click="isOpen = false">
          <img class="modal__body-img" :src="getFile('images', 'auth', 'webp')" alt="" />
          <h3 class="h3-medium text-center">
            {{ $t('usersInformation.message') }}
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
  name: "",
  phone: "",
  country: null,
  teacher: null,
  signal: null,
  pay: null,
  textArea: "",
});
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  gap: 2.4rem;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem 1.6rem;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }

  &__btns {
    display: flex;
    justify-content: space-between;
  }
}

.check {
  .sm-light {
    color: #b5c2d7;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 450px) {
      grid-template-columns: 1fr;
    }
  }
}

.user__profile {
  display: flex;
  gap: 1.6rem;
  align-items: center;
}

.user__text {
  text-decoration: underline;
  cursor: pointer;
}

.user__input {
  display: none;
}
</style>
