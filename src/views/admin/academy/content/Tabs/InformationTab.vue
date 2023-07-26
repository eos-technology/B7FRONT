<template>
  <section>
    <h3 class="h3-medium">{{ $t('informationtab.title') }}</h3>
    <b-form class="form" @submit.stop.prevent>
      <div class="form__content">
        <!-- Name -->
        <b-form-group id="input-name" :label="$t('informationtab.name')" label-for="name">
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
          :label="$t('informationtab.category')"
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
          :label="$t('informationtab.lessons')"
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
          :label="$t('informationtab.courseprice')"
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
        <b-form-group id="input-date" :label="$t('informationtab.start')" label-for="date">
          <b-form-input
            id="date"
            v-model="form.date"
            type="date"
            required
          ></b-form-input>
        </b-form-group>
        <!-- End -->
        <b-form-group id="input-end" :label="$t('informationtab.end')" label-for="end">
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
        :label="$t('informationtab.description')"
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
        :label="$t('informationtab.selectimage')"
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
        <b-button variant="info">{{ $t('informationtab.deletecourse') }}</b-button>
        <div class="d-flex gap-4 ">
          <b-button variant="outline"
            ><p class="btn-info">{{ $t('informationtab.cancel') }}</p></b-button
          >
          <b-button variant="primary" @click="isOpen = true">{{ $t('informationtab.create') }}</b-button>
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
            {{ $t('teleport.text') }}
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
    flex-wrap: wrap;
  }
}
</style>
