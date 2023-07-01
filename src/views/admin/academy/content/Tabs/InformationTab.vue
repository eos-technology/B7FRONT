<template>
  <section>
    <h3 class="h3-medium">Editar curso</h3>
    <b-form class="form" @submit.stop.prevent>
      <div class="form__content">
        <!-- Name -->
        <b-form-group id="input-name" label="Nombre *" label-for="name">
          <b-form-input
            id="name"
            v-model="form.name"
            placeholder="Input placerholder"
            required
          ></b-form-input>
        </b-form-group>
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
        <!-- Lessons -->
        <b-form-group
          id="input-lessons"
          label="Lecciones *"
          label-for="lessons"
        >
          <b-form-input
            id="lessons"
            v-model="form.lessons"
            placeholder="Input placerholder"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Price -->
        <b-form-group
          id="input-price"
          label="Precio del curso *"
          label-for="price"
        >
          <b-form-input
            id="price"
            v-model="form.price"
            placeholder="Input placerholder"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Start -->
        <b-form-group id="input-date" label="Inicia *" label-for="date">
          <b-form-input
            id="date"
            v-model="form.date"
            type="date"
            required
          ></b-form-input>
        </b-form-group>
        <!-- End -->
        <b-form-group id="input-end" label="Fin *" label-for="end">
          <b-form-input
            id="end"
            v-model="form.end"
            type="date"
            required
          ></b-form-input>
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
          v-model="text"
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
        <b-button variant="info">Eliminar curso</b-button>
        <div class="d-flex gap-4 ">
          <b-button variant="outline"
            ><p class="btn-info">Cancelar</p></b-button
          >
          <b-button variant="primary" @click="isOpen = true">Crear</b-button>
        </div>
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
            ¡Se ha creado nuevo curso éxitosamente!
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
  lessons: "",
  price: "",
  date: "",
  end: "",
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
</style>
