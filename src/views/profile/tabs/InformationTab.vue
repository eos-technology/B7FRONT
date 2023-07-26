<template>
  <section class="add-trade">
    <b-form class="form" @submit.stop.prevent>
      <h3 class="h3-medium">{{ $t('profile.basicInformation') }}</h3>
      <label for="user" class="user__profile">
        <img :src="getFile('icons', 'avatar')" alt="" />
        <div>
          <h4 class="h4-bold">Ricardo Gomez Armani</h4>
          <p class="l-medium user__text">{{ $t('profile.changePhoto') }}</p>
        </div>
        <input class="user__input" type="file" id="user" />
      </label>

      <div class="form__content">
        <!-- Name -->
        <b-form-group id="input-name" :label="$t('profile.name')" label-for="name">
          <b-form-input id="name" v-model="form.name" placeholder="Input placerholder" required></b-form-input>
        </b-form-group>
        <!-- Email -->
        <b-form-group id="input-email" :label="$t('profile.email')" label-for="email">
          <b-form-input id="email" v-model="form.email" placeholder="Input placerholder" required
            type="email"></b-form-input>
        </b-form-group>
        <!-- Phone -->
        <b-form-group id="input-phone" :label="$t('profile.phone')" label-for="phone">
          <b-form-input id="phone" v-model="form.phone" placeholder="Input placerholder" type="tel"
            required></b-form-input>
        </b-form-group>
        <!-- Country -->
        <b-form-group id="input-country" :label="$t('profile.country')" label-for="country">
          <b-form-select id="country" v-model="form.country" :options="options"></b-form-select>
        </b-form-group>
        <!-- City -->
        <b-form-group id="input-city" :label="$t('profile.city')" label-for="city">
          <b-form-select id="city" v-model="form.city" :options="options"></b-form-select>
        </b-form-group>
      </div>
      <div class="form__btns justify-content-end">
        <div class="d-flex gap-2">
          <b-button variant="outline">
            <p class="btn-info">{{ $t('profile.cancel') }}</p>
          </b-button>
          <b-button variant="primary" @click="isOpen = true">{{ $t('profile.save') }}</b-button>
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
            {{ $t('profile.message') }}
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
  city: null,
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
