<template>
  <div class="login">
    <img class="login__brand" :src="getFile('images', 'logo', 'webp')" alt="Brand logo" />
    <b-form class="login__form">
      <div class="login__msg">
        <h4 class="h4-medium">{{ $t("login.welcome") }}</h4>
        <h3 class="text-success h3-bold">{{ $t("login.youhere") }}</h3>
        <p class="l-regular">{{ $t("login.login") }}</p>
      </div>
      <b-form-group id="input-email" label="Email" label-for="email">
        <b-form-input id="email" placeholder="example@mail.com" v-model="form.email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-pass" label="Password" label-for="pass">
        <b-form-input id="pass" placeholder="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>
      <b-button variant="info">
        <p class="btn-info">{{ $t("login.forgot") }}</p>
      </b-button>
      <b-button @click="onSubmit()" variant="primary">{{ $t("login.access") }}</b-button>
      <b-button @click="$router.push({ name: 'Signup' })" variant="secondary">{{ $t("login.register") }}</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    onSubmit() {
      this.login(this.form).then(() => {
        this.$router.push({ name: 'Dashboard' })
      })
    }
  }
}
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
