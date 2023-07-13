<template>
  <div class="login">
    <img class="login__brand" :src="getFile('images', 'logo', 'webp')" alt="Brand logo" />
    <b-form class="login__form" @submit.stop.prevent>
      <div class="login__msg">
        <h4 class="h4-medium">{{ $t("login.welcome") }}</h4>
        <h3 class="text-success h3-bold">{{ $t("login.youhere") }}</h3>
        <p class="l-regular">{{ $t("login.login") }}</p>
      </div>
      <b-form-group id="input-email" label="{{$t('auth.email')}}" label-for="email">
        <b-form-input id="email" placeholder="example@mail.com" v-model="form.email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-pass" label="{{$t('auth.password')}}" label-for="pass">
        <b-form-input id="pass" placeholder="{{$t('auth.password')}}" v-model="form.password" type="password"
          required></b-form-input>
      </b-form-group>
      <b-button variant="info">
        <p class="btn-info">{{ $t("login.forgot") }}</p>
      </b-button>
      <b-button variant="primary">{{ $t("login.access") }}</b-button>
      <b-button variant="secondary">{{ $t("login.register") }}</b-button>
    </b-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  email: "",
  password: "",
});
</script>

<style lang="scss" scoped>
.login {
  &__brand {
    margin-bottom: 4rem;
  }

  &__form {
    display: grid;
    gap: 2.4rem;
  }

  &__msg {
    display: grid;
    gap: 1.6rem;
  }
}
</style>
