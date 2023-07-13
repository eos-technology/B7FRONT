<template>
  <section class="module" v-if="step === 1">
    <div class="module__card module__card--btn">
      <h6 class="h6-medium">Crear módulo</h6>
      <b-button variant="primary" @click="step = 2">Crear curso</b-button>
    </div>
    <div class="module__card">
      <div class="d-flex align-items-center gap-4">
        <img :src="getFile('icons', 'single-user')" alt="" />
        <h6 class="h6-medium">Módulo 1</h6>
      </div>
      <img :src="getFile('icons', 'arrow-right')" alt="" />
    </div>
    <div class="module__card">
      <div class="d-flex align-items-center gap-4">
        <img :src="getFile('icons', 'single-user')" alt="" />
        <h6 class="h6-medium">Módulo 1</h6>
      </div>
      <img :src="getFile('icons', 'arrow-right')" alt="" />
    </div>
    <div class="module__card">
      <div class="d-flex align-items-center gap-4">
        <img :src="getFile('icons', 'single-user')" alt="" />
        <h6 class="h6-medium">Módulo 1</h6>
      </div>
      <img :src="getFile('icons', 'arrow-right')" alt="" />
    </div>
  </section>

  <!-- New Module -->
  <section class="new-module" v-if="step === 2">
    <h3 class="h3-medium">Nuevo módulo</h3>
    <!-- Name -->
    <b-form-group id="input-nameModule" label="Nombre *" label-for="nameModule">
      <b-form-input id="nameModule" v-model="form.nameModule" placeholder="Input placerholder" required></b-form-input>
    </b-form-group>
    <div class="new-module__btns">
      <b-button variant="outline" @click="step = 1">
        <p class="btn-info">Cancelar</p>
      </b-button>
      <b-button variant="primary" @click="step = 3">Crear</b-button>
    </div>
  </section>

  <section class="up-video" v-if="step === 3">
    <GoBackDummy @click="step = 2" />
    <div class="up-video__header d-flex justify-content-between align-items-center">
      <h3 class="h3-medium">Módulo 1</h3>
      <b-button variant="primary">Subir video</b-button>
    </div>
    <div class="up-video__card">
      <img :src="getFile('images', 'modul-card', 'png')" alt="" />
      <div class="d-flex flex-column justify-content-between h-100">
        <div>
          <p class="l-medium">Nombre del video</p>
          <p class="sm-light">
            consectetur adipiscing elit. Vivamus ultricies neque libero, non
            mollis massa blandit nec. Cras consequat tellus id enim molestie
            finibus. Phasellus suscipit at sem ac accumsan. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
        </div>
        <div class="d-flex gap-4">
          <b-button variant="outline">Editar</b-button>
          <b-button variant="info">Eliminar</b-button>
        </div>
      </div>
    </div>
    <div class="up-video__card">
      <img :src="getFile('images', 'modul-card', 'png')" alt="" />
      <div class="d-flex flex-column justify-content-between h-100">
        <div>
          <p class="l-medium">Nombre del video</p>
          <p class="sm-light">
            consectetur adipiscing elit. Vivamus ultricies neque libero, non
            mollis massa blandit nec. Cras consequat tellus id enim molestie
            finibus. Phasellus suscipit at sem ac accumsan. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
        </div>
        <div class="d-flex gap-4">
          <b-button variant="outline">Editar</b-button>
          <b-button variant="info">Eliminar</b-button>
        </div>
      </div>
    </div>
    <div class="up-video__card">
      <img :src="getFile('images', 'modul-card', 'png')" alt="" />
      <div class="d-flex flex-column justify-content-between h-100">
        <div>
          <p class="l-medium">Nombre del video</p>
          <p class="sm-light">
            consectetur adipiscing elit. Vivamus ultricies neque libero, non
            mollis massa blandit nec. Cras consequat tellus id enim molestie
            finibus. Phasellus suscipit at sem ac accumsan. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
        </div>
        <div class="d-flex gap-4">
          <b-button variant="outline">Editar</b-button>
          <b-button variant="info">Eliminar</b-button>
        </div>
      </div>
    </div>
    <div class="new-module__btns">
      <b-button variant="outline">
        <p class="btn-info">Cancelar</p>
      </b-button>
      <b-button variant="primary" @click="step = 4">Crear</b-button>
    </div>
  </section>

  <section class="up-video" v-if="step === 4">
    <GoBackDummy @click="step = 3" />
    <h3 class="h3-medium">Nuevo módulo</h3>
    <b-form class="form" @submit.stop.prevent>
      <!-- Name -->
      <b-form-group id="input-name" label="Nombre del video *" label-for="name">
        <b-form-input id="name" v-model="form.name" placeholder="Input placerholder" required></b-form-input>
      </b-form-group>

      <!-- Message -->
      <b-form-group id="input-textarea" label="Description *" label-for="textarea">
        <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." rows="3"
          max-rows="6"></b-form-textarea>
      </b-form-group>
      <!-- Dropzone -->
      <b-form-group id="input-dropzone" label="Seleccionar imagen *" label-for="dropzone">
        <DropZone id="dropzone" @drop.prevent="drop" @change="selectedFile" class="mb-4" />
      </b-form-group>
      <div class="form__btns">
        <b-button variant="outline">
          <p class="btn-info">Cancelar</p>
        </b-button>
        <b-button variant="primary">Guardar</b-button>
      </div>
    </b-form>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const form = ref({
  nameModule: "",
});

const step = ref(3);
</script>

<style lang="scss" scoped>
.module {
  display: grid;
  gap: 2.4rem;

  &__card {
    display: flex;
    justify-content: space-between;
    padding: 24px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);

    &--btn {
      padding: 15px 16px;
    }
  }
}

.new-module {
  display: grid;
  gap: 3.2rem;

  &__btns {
    display: flex;
    justify-content: flex-end;
  }
}

.up-video {
  display: grid;
  gap: 3.2rem;

  &__card {
    display: flex;
    padding: 12px 16px;
    gap: 16px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);

    button {
      padding: 0;
    }
  }
}

.form {
  display: grid;
  gap: 2.4rem;

  &__btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
