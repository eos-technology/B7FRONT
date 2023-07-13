<template>
  <section class="dashboard" v-if="!createToken">
    <!--  Tokens -->
    <div class="dashboard__header">
      <h2 class="h2-bold">Tokens</h2>
      <b-button variant="primary" @click="createToken = true">Crear tokens</b-button>
    </div>

    <div class="dashboard__tokens">
      <div class="token__card token__card--blue">
        <h4 class="h4-bold">Token sale ends in</h4>
        <div class="count">
          <div class="count__date">
            <p class="b-medium">Permitir desde</p>
            <div class="count__date-box">
              <div class="count__box">
                <p class="l-medium">Days</p>
                <div class="count__box-data">03</div>
              </div>
              <div class="count__box">
                <p class="l-medium">Mes</p>
                <div class="count__box-data">10</div>
              </div>
              <div class="count__box">
                <p class="l-medium">Año</p>
                <div class="count__box-data">23</div>
              </div>
            </div>
          </div>
          <div class="count__line"></div>
          <div class="count__date">
            <p class="b-medium">Permitir hasta</p>
            <div class="count__date-box">
              <div class="count__box">
                <p class="l-medium">Days</p>
                <div class="count__box-data">03</div>
              </div>
              <div class="count__box">
                <p class="l-medium">Mes</p>
                <div class="count__box-data">11</div>
              </div>
              <div class="count__box">
                <p class="l-medium">Año</p>
                <div class="count__box-data">23</div>
              </div>
            </div>
          </div>

        </div>
        <div class="token__progress">
          <p>${{ token }} pledget of ${{ maxToken }} goal</p>
          <b-progress variant="success" :value="token" :max="maxToken"></b-progress>
        </div>
        <div class="count__flex">
          <b-button class="btns--white w-100">Eliminar</b-button>
          <b-button variant="primary" class="w-100" @click="isOpen = true">Editar</b-button>
        </div>
      </div>
      <div class="token__card token__card--blue">
        <h4 class="h4-bold">Token sale ends in</h4>
        <div class="count">
          <div class="count__date">
            <p class="b-medium">Permitir desde</p>
            <div class="count__date-box">
              <div class="count__box">
                <p class="l-medium">Days</p>
                <div class="count__box-data">03</div>
              </div>
              <div class="count__box">
                <p class="l-medium">Mes</p>
                <div class="count__box-data">10</div>
              </div>
              <div class="count__box">
                <p class="l-medium">Año</p>
                <div class="count__box-data">23</div>
              </div>
            </div>
          </div>
          <div class="count__line"></div>
          <div class="count__date">
            <p class="b-medium">Permitir hasta</p>
            <div class="count__date-box">
              <div class="count__box">
                <p class="l-medium">Days</p>
                <div class="count__box-data">03</div>
              </div>
              <div class="count__box">
                <p class="l-medium">Mes</p>
                <div class="count__box-data">11</div>
              </div>
              <div class="count__box">
                <p class="l-medium">Año</p>
                <div class="count__box-data">23</div>
              </div>
            </div>
          </div>

        </div>
        <div class="token__progress">
          <p>${{ token }} pledget of ${{ maxToken }} goal</p>
          <b-progress variant="success" :value="token" :max="maxToken"></b-progress>
        </div>
        <div class="count__flex">
          <b-button class="btns--white w-100">Eliminar</b-button>
          <b-button variant="primary" class="w-100" @click="isOpen = true">Editar</b-button>
        </div>
      </div>
    </div>
  </section>
  <section v-if="createToken" class="create-token d-flex flex-column">
    <GoBackDummy @click="createToken = false" />
    <createToken />
  </section>
</template>


<script setup>
import { ref } from "vue";
import CreateToken from "./content/CreateToken.vue"
const token = ref(18090);
const maxToken = ref(25000);

let createToken = ref(false)
</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  gap: 2.4rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }



  &__tokens {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;

    @media (max-width:1200px) {
      grid-template-columns: 1fr;

    }
  }
}


.token {
  display: grid;
  gap: 2.4rem;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;

    @media ((max-width: 1100px)) {
      grid-template-columns: 1fr;
      gap: 2.4rem;
    }
  }

  &__card {
    display: flex;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    border-radius: 16px;

    &--blue {
      border: 1px solid #7d79e7;
      background: rgba(60, 57, 135, 0.1);
    }

    &--green {
      border: 1px solid var(--brand-verde, #48a254);
      background: rgba(73, 135, 73, 0.1);
    }

    &--yellow {
      border: 1px solid var(--inputs-radio-checkbox-toggle-active, #ee8722);
      background: rgba(237, 135, 34, 0.1);
    }

    &--cyan {
      border: 1px solid var(--brand-azul-claro, #3bbeee);
      background: rgba(59, 190, 238, 0.1);
    }

    @media ((max-width: 600px)) {
      padding: 1.2rem;
    }
  }

  &__progress {
    display: grid;
    gap: 8px;
  }

  &__height {
    height: fit-content;
  }

  &__list {
    display: grid;
    gap: 1.6rem;

    &-item {
      display: flex;
      gap: 1.6rem;
      align-items: center;
    }

    &-icon {
      background-color: #3c3987;
      border-radius: 100px;
      width: 2.4rem;
      height: 2.4rem;
      display: grid;
      place-content: center;
    }
  }
}

.count {
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  gap: 2.4rem;

  @media (max-width:700px) {
    grid-template-columns: 1fr;
  }

  &__date {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    &-box {
      display: grid;
      gap: 2.4rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__line {
    height: 100%;
    width: 1px;
    background-color: #fff;
  }

  &__box {
    display: grid;
    gap: 8px;
    text-align: center;

    &-data {
      display: flex;
      padding: 16px;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  &__flex {
    display: flex;
    width: 100%;
    gap: 2.4rem;
  }
}

.create-token {
  gap: 4.8rem;
}
</style>
