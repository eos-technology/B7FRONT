<template>
  <div class="login">
    <img class="login__brand" :src="getFile('images', 'logo', 'webp')" alt="Brand logo" />
    <b-form class="login__form">
      <div class="login__msg">
        <h4 class="h4-medium">{{ $t("login.welcome") }}</h4>
        <h3 class="text-success h3-bold">{{ $t("login.youhere") }}</h3>
        <p class="l-regular">{{ $t("login.login") }}</p>
      </div>
      <b-form-group id="username" :label="$t('auth.username')" label-for="username">
        <b-form-input id="username" placeholder="example@mail.com" v-model="form.username" required></b-form-input>
      </b-form-group>
      <b-form-group id="names" :label="$t('auth.names')" label-for="names">
        <b-form-input id="names" placeholder="John Doe" v-model="form.names" required></b-form-input>
      </b-form-group>
      <b-form-group id="email" :label="$t('auth.email')" label-for="email">
        <b-form-input id="email" placeholder="example@mail.com" v-model="form.email" type="email" required></b-form-input>
      </b-form-group>
      <b-form-group v-if="countries" id="country" :label="$t('auth.country')" label-for="country">
        <VueMultiselect v-model="form.country" :options="countries" :searchable="true" :placeholder="$t('manager.search')"
          track-by="id" label="name" />
      </b-form-group>
      <b-form-group id="number_phone" :label="$t('auth.numberPhone')" label-for="number_phone">
        <b-form-input id="number_phone" placeholder="12341" v-model="form.phone" type="number" required></b-form-input>
      </b-form-group>
      <b-form-group id="password" :label="$t('auth.password')" label-for="password">
        <b-form-input id="email" placeholder="*******" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-pass" :label="$t('auth.password')" label-for="pass">
        <b-form-input id="pass" placeholder="password" v-model="form.r_password" type="password" required></b-form-input>
      </b-form-group>
      <b-button @click="onSubmit()" variant="secondary">{{ $t("login.register") }}</b-button>
      <b-button @click="$router.push({ name: 'Login' })" variant="primary">{{ $t("login.access") }}</b-button>
    </b-form>
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";
import { mapActions, mapState } from "vuex";
export default {
  props: ['username'],
  components: {
    VueMultiselect
  },
  data() {
    return {
      form: {
        username: 'carlosaroca',
        names: 'Carlos Aroca',
        email: 'carlosarocac@gmail.com',
        phone: 123,
        password: 'Colombia#22',
        r_password: 'Colombia#22',
        country: null,
        user_parent: null
      }
    }
  },
  created() {
    if (this.username) {
      this.user_parent = this.username
    }
    this.getCountries()
  },
  methods: {
    ...mapActions('auth', ['register']),
    ...mapActions('utils', ['getCountries']),
    onSubmit() {
      this.register(this.form).then(() => {
        openNotification()
        this.$router.push({ name: 'Login' })
      })
    }
  },
  computed: {
    ...mapState('utils', ['countries'])
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

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
