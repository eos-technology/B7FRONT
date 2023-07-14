<template>
  <section class="add-trade">
    <h3 class="h3-medium">{{ $t('editMembership.title') }}</h3>
    <b-form class="form" @submit.stop.prevent>
      <h5 class="h5-medium">{{ $t('editMembership.info') }}</h5>

      <div class="form__content">
        <!-- Name -->
        <b-form-group id="input-name" :label="$t('editMembership.name')" label-for="name">
          <b-form-input
            id="name"
            v-model="form.name"
            placeholder="Input placerholder"
            required
          ></b-form-input>
        </b-form-group>
        <!-- Price -->
        <b-form-group id="input-price" :label="$t('editMembership.price')" label-for="price">
          <b-form-input
            id="price"
            v-model="form.price"
            placeholder="Input placerholder"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <!-- Dropzone -->
      <b-form-group
        id="input-dropzone"
        :label="$t('editMembership.image')"
        label-for="dropzone"
      >
        <DropZone
          id="dropzone"
          @drop.prevent="drop"
          @change="selectedFile"
          class="mb-4"
        />
      </b-form-group>

      <h5 class="h5-medium">{{ $t('editMembership.enableMem') }}</h5>
      <div class="switch">
        <div class="switch__text">
          <p class="b-medium">{{ $t('editMembership.enable') }}</p>
          <p class="sm-light">{{ $t('editMembership.pay') }}</p>
        </div>
        <b-form-checkbox switch></b-form-checkbox>
      </div>
      <div class="switch">
        <div class="switch__text">
          <p class="b-medium">{{ $t('editMembership.enable') }}</p>
          <p class="sm-light">{{ $t('editMembership.membership') }}</p>
        </div>
        <b-form-checkbox switch></b-form-checkbox>
      </div>
      <h5 class="h5-medium">{{ $t('editMembership.benefits') }}</h5>

      <div class="check__grid">
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <div class="check">
            <p class="b-medium">{{ $t('editMembership.enableBenefits') }}</p>
            <p class="sm-light">{{ $t('editMembership.plans') }}</p>
          </div>
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <div class="check">
            <p class="b-medium">{{ $t('editMembership.enableBenefits') }}</p>
            <p class="sm-light">{{ $t('editMembership.live') }}</p>
          </div>
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <div class="check">
            <p class="b-medium">{{ $t('editMembership.enableBenefits') }}</p>
            <p class="sm-light">{{ $t('editMembership.signals') }}</p>
          </div>
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <div class="check">
            <p class="b-medium">{{ $t('editMembership.enableBenefits') }}</p>
            <p class="sm-light">{{ $t('editMembership.academy') }}</p>
          </div>
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <div class="check">
            <p class="b-medium">{{ $t('editMembership.enableBenefits') }}</p>
            <p class="sm-light">{{ $t('editMembership.wallet') }}</p>
          </div>
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <div class="check">
            <p class="b-medium">{{ $t('editMembership.enableBenefits') }}</p>
            <p class="sm-light">Chat</p>
          </div>
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <div class="check">
            <p class="b-medium">{{ $t('editMembership.enableBenefits') }}</p>
            <p class="sm-light">{{ $t('editMembership.book') }}</p>
          </div>
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <div class="check">
            <p class="b-medium">{{ $t('editMembership.enableBenefits') }}</p>
            <p class="sm-light">{{ $t('editMembership.referral') }}</p>
          </div>
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <div class="check">
            <p class="b-medium">{{ $t('editMembership.enableBenefits') }}</p>
            <p class="sm-light">Chat</p>
          </div>
        </b-form-checkbox>
      </div>

      <div class="form__btns">
        <b-button variant="info">{{ $t('editMembership.delete') }}</b-button>
        <div class="d-flex gap-2">
          <b-button variant="outline"
            ><p class="btn-info">{{ $t('editMembership.cancel') }}</p></b-button
          >
          <b-button variant="primary" @click="isOpen = true">{{ $t('editMembership.create') }}</b-button>
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
            {{ $t('editMembership.message') }}
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
  name: "",
  price: "",
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
    justify-content: space-between;
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
</style>
