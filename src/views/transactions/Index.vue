<template>
  <main>
    <header>
      <div class="header">
        <h2 class="h2-bold">Transacciones</h2>
        <b-button variant="primary" @click="showModal = true">Retirar</b-button>
      </div>
      <div class="signal-cards">
        <SignalCard v-for="card in 4" :key="card" />
      </div>
    </header>
    <section class="movements">
      <div class="movements-header">
        <h3 class="h3-bold">Movimientos</h3>
        <div class="filter-box">
          <div class="search-filter">
            <div class="field-search">
              <b-form-input
                type="search"
                placeholder="search"
                class="b-light"
              ></b-form-input>
              <i class="b7-search"></i>
            </div>
          </div>
          <Filter />
        </div>
      </div>
      <AccordionTransactions />
    </section>
    <div class="modal" v-if="showModal">
      <div class="modal__body">
        <div class="header-modal">
          <h2 class="h2-bold">Retirar</h2>
          <img :src="getFile('images', 'logo', 'webp')" alt="" />
        </div>
        <div class="content-modal">
          <div>
            <h4 class="h4-semibold">Dirección de billetera</h4>
            <p class="b-regular">
              Asegúrese de tener bsc en esta billetera para cubrir la tarifa
            </p>
          </div>
          <div class="dropdown d-flex flex-row justify-content-between">
            <img :src="getFile('images', 'crypto-ico', 'png')" alt="" />
            <div class="item">
              <span class="l-light">Saldo disponible</span>
              <span class="h6-medium">15.543.04</span>
            </div>
            <i class="b7-arrow-down"></i>
          </div>
          <div class="inputs-modal">
            <div>
              <label for="wallet" class="l-medium"
                >Destination wallet <span>*</span></label
              >
              <b-form-input
                id="wallet"
                type="text"
                placeholder="Wallet Address"
              ></b-form-input>
            </div>
            <div>
              <label for="amount" class="l-medium"
                >Amount to withdraw <span>*</span></label
              >
              <b-form-input
                id="amount"
                type="number"
                placeholder="$0.00"
              ></b-form-input>
            </div>
          </div>
          <div class="buttons-modal d-flex justify-content-end mt-3">
            <b-button variant="outline-primary" @click="showModal = false"
              >Cancelar</b-button
            >
            <b-button variant="primary">Realizar retiro</b-button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import SignalCard from "./content/SignalCard.vue";
import AccordionTransactions from "./content/AccordionTransactions.vue";

import { ref } from "vue";

let showModal = ref(false);
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex-wrap: wrap;
    
    .header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    .signal-cards {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }

  .movements {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    
    .movements-header {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;
      justify-content: space-between;
      align-items: center;
    }
    
    .filter-box {
      flex-wrap: wrap;
      display: flex;
      gap: 0.625rem;
    }
  }

  .modal__body {
    padding: 0;
    align-items: stretch;
    width: 40%;
    min-width: 300px;
    gap: 1.5rem;
    overflow: hidden;

    .header-modal {
      background: url(../../../src/assets/images/bg-header-modal.webp);
      padding: 3.25rem 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-size: cover;
      background-position: center bottom;

      img {
        height: 4rem;
      }
    }

    .content-modal {
      padding: 0 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .dropdown {
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.05);

        img {
          width: 2.5rem;
        }

        .item {
          margin-right: auto;
          display: flex;
          flex-direction: column;

          :first-child {
            color: #b5c2d7;
          }
        }

        i {
          padding: 0.5rem;
          border-radius: 100%;
          background: rgba(255, 255, 255, 0.1);
        }
      }

      .inputs-modal {
        label {
          color: #9ba3ae;

          span {
            color: #ef4444;
          }
        }
      }

      .buttons-modal {
        gap: 1rem;
      }
    }
  }
}
</style>
