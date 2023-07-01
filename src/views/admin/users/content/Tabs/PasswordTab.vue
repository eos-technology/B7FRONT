<template>
  <section class="add-trade">
    <b-form class="form" @submit.stop.prevent>
      <h3 class="h3-medium">Cambio de contraseña</h3>

      <div class="form__content">
        <!-- Password -->
        <b-form-group id="input-pass" label="Nueva contraseña *" label-for="pass">
          <b-form-input
            id="pass"
            v-model="form.pass"
            placeholder="Password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <!-- New Password -->
        <b-form-group id="input-newPass" label="Confirmar contraseña *" label-for="newPass">
          <b-form-input
            id="newPass"
            v-model="form.newPass"
            placeholder="Password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
      </div>

      <div class="form__btns">
        <b-button variant="outline"><p class="btn-info">Cancelar</p></b-button>
        <b-button variant="primary" @click="isOpen = true">Guardar</b-button>
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
            ¡Se ha cambiado la contraseña éxitosamente!
          </h3>
        </div>
      </div>
    </teleport>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);


const form = ref({
  pass: "",
  newPass: "",
});
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  gap: 2.4rem;
  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem 1.6rem;
    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }
  &__btns {
    display: flex;
    justify-content: flex-end;

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
