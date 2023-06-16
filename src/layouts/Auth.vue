<template>
  <section class="auth">
    <router-view></router-view>
    <img
      class="auth__img"
      :src="getFile('images', 'auth', 'webp')"
      alt="Trading people"
    />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.auth {
  background-color: #070721;
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 44.8rem 1fr;
  gap: 3.6rem;
  padding: 9rem 3.5rem 3.5rem 13rem;
  @media (max-width:1300px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width:900px) {
    grid-template-columns: 1fr;
    padding: 9rem 3.5rem ;
  }
  &__img {
    max-width: 640px;
    margin: auto;
    width: 100%;
    @media (max-width:900px) {
      display: none;
    }
  }
}
</style>
