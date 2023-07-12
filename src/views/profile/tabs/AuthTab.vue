<template>
  <section>
    <h3 class="h3-medium">Doble Factor de autenticación</h3>
    <div class="content d-flex flex-column align-content-stretch gap-4">
      <p class="b-light">Google authenticator</p>
      <div class="d-flex gap-5">
        <img :src="getFile('images', 'qr', 'png')" alt="" />
        <div class="d-flex flex-column flex-grow-1 gap-4">
          <p class="paragraph-12">Two factor authentication provides extra protection for your account by requiring a
            special code.
          </p>
          <p class="paragraph-12"><strong>Note:</strong> You are only activating two factor authentication for the main
            password.</p>
          <p class="b-semibold">Have a smart phone? Use Google Authenticator!</p>
          <div class="stores">
            <img :src="getFile('images', 'app-store', 'png')" alt="" />
            <img :src="getFile('images', 'google-play', 'png')" alt="" />
          </div>
          <div class="secret-section d-flex flex-column gap-1">
            <p class="b-medium">Secret Key</p>
            <div class="secret">
              <input type="text" v-model="secretKey" class="sm-semibold">
              <button>copy <img :src="getFile('images', 'copy-icon', 'svg')" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form__btns align-self-end">
      <b-button variant="outline">
        <p class="btn-info">Cancelar</p>
      </b-button>
      <b-button variant="primary" @click="isOpen = true">Guardar</b-button>
    </div>
  </section>
</template>

<script setup>
let secretKey = 'JFSWQMTFGJ4G6Z3EIY2FQTDRGFCHQWLJ'
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 32px;

}

.stores {
  display: flex;
  gap: 24px;
  margin: auto 0;
}

.paragraph-12 {
  font-size: 12px;
}

.secret-section {
  margin-top: auto;
}

.secret {
  position: relative;
  display: flex;
  align-items: center;

  input {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    border: 2px dashed #EE8722;
    padding: 20px 16px;
    font-size: 12px;
    width: 100%;
    color: white;
    padding-right: 11rem;
  }

  button {
    position: absolute;
    right: 16px;
    border: none;
    border-radius: 100px;
    background: white;
    color: #EE8722;
    font-size: 12px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 16px;
    }
  }
}
</style>
