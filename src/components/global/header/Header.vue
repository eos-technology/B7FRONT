<template>
  <header class="header">
    <div class="header__up">
      <img
        class="header__img"
        :src="getFile('images', 'logo', 'webp')"
        alt="Logo"
      />
      <div class="header__box">
        <LinkReferrals />
        <DropdownUser />
      </div>
    </div>
    <div class="header__down">
      <HeaderRoutes />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: grid;
  gap: 2.4rem;
  &__up {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 2.4rem;
  }

  &__img {
    width: 150px;
  }
  &__box {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>
