<template>
  <section class="add-trade">
    <b-form class="form" @submit.stop.prevent>
      <h3 class="h3-medium">{{ $t('profile.changePassword') }}</h3>

      <div class="form__content">
        <!-- Password -->
        <b-form-group id="input-pass" :label="$t('profile.newPassword')" label-for="pass">
          <b-form-input id="pass" v-model="form.pass" placeholder="Password" type="password" required>
          </b-form-input>
          <img :src="getFile('images', 'eye-cross', 'svg')" alt="" />
        </b-form-group>
        <!-- Confirm Password -->
        <b-form-group id="confirm-pass" :label="$t('profile.confirmPassword')" label-for="confirmPass">
          <b-form-input id="confirmPass" v-model="form.confirmPass" placeholder="Password" type="password" required>
          </b-form-input>
          <img :src="getFile('images', 'eye-cross', 'svg')" alt="" />
        </b-form-group>
      </div>

      <div class="form__btns">
        <b-button variant="outline">
          <p class="btn-info">{{ $t('profile.cancel') }}</p>
        </b-button>
        <b-button variant="primary" @click="isOpen = true">{{ $t('profile.save') }}</b-button>
      </div>
    </b-form>
  </section>

  <section class="root">
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div class="modal__body" @click="isOpen = false">
          <img class="modal__body-img" :src="getFile('images', 'auth', 'webp')" alt="" />
          <h3 class="h3-medium text-center">
            {{ $t('profile.passwordMessage') }}
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
  confirmPass: "",
});
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  gap: 2.4rem;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

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
<style lang="scss">
#input-pass>:not(label),
#confirm-pass>:not(label) {
  position: relative;
  display: flex;
  align-items: center;
}

#input-pass>:not(label)>input,
#confirm-pass>:not(label)>input {
  padding-right: 3.5rem;
}

#input-pass>:not(label)>img,
#confirm-pass>:not(label)>img {
  position: absolute;
  z-index: 9;
  right: 1rem;
}
</style>
