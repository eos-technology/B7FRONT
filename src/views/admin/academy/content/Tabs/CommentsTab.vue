<template>
  <section class="comments">
    <div class="comments__card">
      <div class="comments__user">
        <div class="d-flex align-items-center gap-2">
          <img
            class="comments__avatar"
            :src="getFile('icons', 'avatar')"
            alt=""
          />
          <p class="l-medium">Nombre del video</p>
        </div>
        <p class="sm-light">
          consectetur adipiscing elit. Vivamus ultricies neque libero, non
          mollis massa blandit nec. Cras consequat tellus id enim molestie
          finibus. Phasellus suscipit at sem ac accumsan. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </div>
      <div class="comments__btns">
        <b-button variant="outline">{{ $t('commenstab.respond') }}</b-button>
        <b-button variant="info">{{ $t('commenstab.delete') }}</b-button>
      </div>
    </div>
    <div class="comments__card">
      <div class="comments__user">
        <div class="d-flex align-items-center gap-2">
          <img
            class="comments__avatar"
            :src="getFile('icons', 'avatar')"
            alt=""
          />
          <p class="l-medium">Nombre del video</p>
        </div>
        <p class="sm-light">
          consectetur adipiscing elit. Vivamus ultricies neque libero, non
          mollis massa blandit nec. Cras consequat tellus id enim molestie
          finibus. Phasellus suscipit at sem ac accumsan. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </div>
      <div class="comments__btns">
        <b-button variant="outline">Responder</b-button>
        <b-button variant="info">Eliminar</b-button>
      </div>
    </div>
    <div class="comments__card">
      <div class="comments__user">
        <div class="d-flex align-items-center gap-2">
          <img
            class="comments__avatar"
            :src="getFile('icons', 'avatar')"
            alt=""
          />
          <p class="l-medium">Nombre del video</p>
        </div>
        <p class="sm-light">
          consectetur adipiscing elit. Vivamus ultricies neque libero, non
          mollis massa blandit nec. Cras consequat tellus id enim molestie
          finibus. Phasellus suscipit at sem ac accumsan. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </div>
      <div class="comments__btns">
        <b-button variant="outline">Responder</b-button>
        <b-button variant="info">Eliminar</b-button>
      </div>
    </div>
    <div class="comments__card">
      <div class="comments__user">
        <div class="d-flex align-items-center gap-2">
          <img
            class="comments__avatar"
            :src="getFile('icons', 'avatar')"
            alt=""
          />
          <p class="l-medium">Nombre del video</p>
        </div>
        <p class="sm-light">
          consectetur adipiscing elit. Vivamus ultricies neque libero, non
          mollis massa blandit nec. Cras consequat tellus id enim molestie
          finibus. Phasellus suscipit at sem ac accumsan. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </div>
      <div class="comments__btns">
        <b-button variant="outline">Responder</b-button>
        <b-button variant="info">Eliminar</b-button>
      </div>
    </div>
    <div class="comments__card">
      <div class="comments__user">
        <div class="d-flex align-items-center gap-2">
          <img
            class="comments__avatar"
            :src="getFile('icons', 'avatar')"
            alt=""
          />
          <p class="l-medium">Nombre del video</p>
        </div>
        <p class="sm-light">
          consectetur adipiscing elit. Vivamus ultricies neque libero, non
          mollis massa blandit nec. Cras consequat tellus id enim molestie
          finibus. Phasellus suscipit at sem ac accumsan. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </div>
      <div class="comments__btns">
        <b-button variant="outline">Responder</b-button>
        <b-button variant="info">Eliminar</b-button>
      </div>
    </div>
    <div class="form__btns">
      <div class="d-flex gap-4">
        <b-button variant="outline"><p class="btn-info">{{ $t('commenstab.cancel') }}</p></b-button>
        <b-button variant="primary">{{ $t('commenstab.save') }}</b-button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.comments {
  display: grid;
  gap: 3.2rem;
  &__card {
    display: grid;
    gap: 2.4rem;
    padding: 12px 16px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
  }
  &__user {
    display: grid;
    gap: 4px;
  }
  &__avatar {
    width: 3.2rem;
    height: 3.2rem;
  }
  &__btns {
    display: flex;
    gap: 1.6rem;
    button {
      padding: 0;
    }
  }
}

.form {
  &__btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
