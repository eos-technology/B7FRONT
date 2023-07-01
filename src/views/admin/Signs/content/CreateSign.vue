<template>
  <section class="add-trade">
    <h3 class="h3-medium">Crear señal</h3>
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
        <!-- Tipo -->
        <b-form-group id="input-category" label="Tipo *" label-for="tipo">
          <b-form-select
            id="tipo"
            v-model="form.type"
            :options="options"
          ></b-form-select>
        </b-form-group>
        <!-- Gesto -->
        <b-form-group id="input-category" label="Gesto *" label-for="gesto">
          <b-form-select
            id="gesto"
            v-model="form.gesto"
            :options="options"
          ></b-form-select>
        </b-form-group>
        <!-- win -->
        <b-form-group id="input-price" label="Win *" label-for="win">
          <b-form-input
            id="win"
            v-model="form.win"
            placeholder="Input placerholder"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Loss -->
        <b-form-group id="input-price" label="Loss *" label-for="loss">
          <b-form-input
            id="loss"
            v-model="form.loss"
            placeholder="Input placerholder"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Total -->
        <b-form-group id="input-price" label="Total *" label-for="total">
          <b-form-input
            id="total"
            v-model="form.total"
            placeholder="Input placerholder"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <!-- Total profit -->
      <b-form-group
        id="input-total-profit"
        label="Total Profit *"
        label-for="total-profit"
        class="w-100"
      >
        <b-form-input
          id="total-profit"
          v-model="form.totalProfit"
          placeholder="Enter something..."
          class="w-100"
        ></b-form-input>
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
        <b-button variant="outline">
          <p class="btn-info">Cancelar</p>
        </b-button>
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
            ¡Se ha creado nueva señal éxitosamente!
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
  type: null,
  gesto: null,
  win: "",
  loss: "",
  total: "",
  totalProfit: "",
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
    justify-content: flex-end;
  }
}
</style>
