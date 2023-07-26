<template>
  <section class="app">
    <div class="app__header">
      <div class="app__header-content">
        <Header />
      </div>
    </div>
    <div class="app__container">
      <router-view></router-view>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.app {
  height: 100%;
  min-height: 100vh;
  background-image: url("../assets/images/dashboard.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &__header {
    background: rgba(255, 255, 255, 0.04);

    &-content {
      padding: 2.4rem 4%;
      max-width: 1440px;
      margin: 0 auto;
    }
  }

  &__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 2.4rem 4%;
  }
}</style>
