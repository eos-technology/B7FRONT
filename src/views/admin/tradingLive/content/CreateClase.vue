<template>
  <section class="add-trade">
    <h3 class="h3-medium">Crear clase</h3>
    <b-form class="form" @submit.stop.prevent>
      <!-- Name -->
      <b-form-group id="input-name" label="Nombre *" label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          placeholder="Input placerholder"
          required
        ></b-form-input>
      </b-form-group>
      <div class="form__content">
        <!-- Category -->
        <b-form-group
          id="input-category"
          label="Categoría *"
          label-for="category"
        >
          <b-form-select
            id="category"
            v-model="form.category"
            :options="options"
          ></b-form-select>
        </b-form-group>
        <!-- Category -->
        <b-form-group id="input-time" label="Tiempo *" label-for="time">
          <b-form-select
            id="time"
            v-model="form.time"
            :options="options"
          ></b-form-select>
        </b-form-group>
      </div>
      <!-- Message -->
      <b-form-group
        id="input-textarea"
        label="Description *"
        label-for="textarea"
      >
        <b-form-textarea
          id="textarea"
          v-model="form.textArea"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <!-- Dropzone -->
      <b-form-group
        id="input-dropzone"
        label="Seleccionar imagen *"
        label-for="dropzone"
      >
        <DropZone
          id="dropzone"
          @drop.prevent="drop"
          @change="selectedFile"
          class="mb-4"
        />
      </b-form-group>

      <div class="form__btns">
        <b-button variant="outline"><p class="btn-info">Cancelar</p></b-button>
        <b-button variant="primary" @click="isOpen = true">Crear</b-button>
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
            ¡Se ha creado nueva clase éxitosamente!
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
  category: null,
  time: null,
  textArea: "",
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
</style>
