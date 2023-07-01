<template>
  <div class="plan">
    <div class="plan__header">
      <h2 class="h2-bold">KYC</h2>
    </div>

    <!-- TABLE -->
    <div class="plan__table">
      <div class="plan__header">
        <b-button variant="primary" class="ml-auto" @click="deniedModal = true">Aprobar todo</b-button>
        <div class="plan__filter">
          <div class="search-filter">
            <div class="field-search">
              <b-form-input type="search" placeholder="Search" class="b-light"></b-form-input>
              <i class="b7-search"></i>
            </div>
          </div>
          <Filter />
        </div>
      </div>
      <div class="table" v-dragscroll.x>
        <table class="table__container">
          <thead>
            <tr>
              <th class="sm-bold">USUARIO</th>
              <th class="sm-bold">EMAIL</th>
              <th class="sm-bold">ADDRESS</th>
              <th class="sm-bold">DOC</th>
              <th class="sm-bold">TIPO</th>
              <th class="sm-bold w-25">OPTIONS</th>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr class="table__tr" v-for="(item, index) in 6" :key="index">
              <td class="sm-regular">00 min</td>
              <td class="sm-regular">name@email.com</td>
              <td class="sm-regular">Address</td>
              <td class="sm-regular">USDT</td>
              <td class="sm-regular">$0.00</td>
              <td class="options d-flex gap-3">
                <div class="document d-flex align-items-center gap-1">
                  <img :src="getFile('images', 'document-icon', 'svg')" alt="">
                  <p class="xs-light">NameDocument.PDF</p>
                </div>
                <b-button pill class="bg-light-2 text-black" size="sm">Descargar</b-button>
                <b-button variant="outline-primary" pill class="btn-outline-primary" size="sm"
                  @click="rejectModal = true">Rechazar</b-button>
                <b-button pill variant="primary" size="sm" class="bg-primary"
                  @click="successfulModal = true">Aprobar</b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <b-pagination align="center" v-model="currentPage" pills :total-rows="rows"></b-pagination>
    </div>
  </div>

  <!-- Modal Reject -->
  <div class="modal reject" v-if="rejectModal">
    <div class="modal__body">
      <div class="header-modal">
        <h2 class="h2-bold">KYC</h2>
        <img :src="getFile('images', 'logo', 'webp')" alt="" />
      </div>
      <div class="content-modal">
        <i class="b7-warning"></i>
        <div class="info">
          <p class="b-regular">KYC</p>
          <h6 class="h6-regular">¿Estás seguro de rechazar esta solicitud KYC?</h6>
        </div>
        <div class="buttons-modal d-flex justify-content-end mt-3 w-100">
          <b-button variant="outline-primary" @click="rejectModal = false">Cancelar</b-button>
          <b-button variant="primary">Aceptar</b-button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal Successful -->
  <div class="modal successful" v-if="successfulModal" @click.self="successfulModal = false">
    <div class="modal__body">
      <div class="header-modal">
        <h2 class="h2-bold">KYC</h2>
        <img :src="getFile('images', 'logo', 'webp')" alt="" />
      </div>
      <div class="content-modal">
        <i class="b7-done text-success"></i>
        <div class="info">
          <p class="b-regular">KYC exitoso</p>
          <h6 class="h6-regular">KYC exitoso.</h6>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal Denied -->
  <div class="modal denied" v-if="deniedModal" @click.self="deniedModal = false">
    <div class="modal__body">
      <div class="header-modal">
        <h2 class="h2-bold">Retiro</h2>
        <img :src="getFile('images', 'logo', 'webp')" alt="" />
      </div>
      <div class="content-modal">
        <i class="b7-delete text-danger"></i>
        <div class="info">
          <p class="b-regular">Retiro negado</p>
          <h6 class="h6-regular">El retiro ha sido negado.</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rows = ref(100);
const currentPage = ref(3);


//Modals
let rejectModal = ref(false)
let successfulModal = ref(false)
let deniedModal = ref(false)
</script>

<style lang="scss" scoped>
.plan {
  display: grid;
  gap: 2.4rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;
  }

  &__filter {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  &__table {
    padding: 2.4rem;
    display: grid;
    gap: 2.4rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.05);

    @media (max-width: 600px) {
      padding: 1.2rem;
    }

  }
}

.table__tr {
  padding: 0.5rem 0;
}

td.options {
  background: rgba(249, 249, 249, 0.10) !important;
  margin: 0.5rem 0;
  border-radius: 0.5rem;

  .document {
    margin-right: 2rem;
  }
}

.trade {
  display: grid;
  gap: 4.8rem;
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
    align-items: center;

    i {
      font-size: 48px;
      color: #C69849;
    }

    .info {
      display: flex;
      align-items: center;
      flex-direction: column;

      .b-regular {
        color: #B5C2D7;
      }
    }

    .buttons-modal {
      gap: 1rem
    }
  }
}

.btn-outline-primary {
  background: none;
  border: 1px solid #EE8722;

  &:hover {
    background: none;
    color: #EE8722;
  }
}
</style>
