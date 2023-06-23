<template>
  <b-button variant="outline-light"
    ><img class="referrals" :src="getFile('icons', 'copy')" alt="" />
    <p class="referrals__text">Link Referrals</p></b-button
  >
</template>

<script setup></script>

<style lang="scss" scoped>
.btn {
  padding: 8px 12px 8px 8px;
  @media (max-width: 405px) {
    padding: 8px;
  }
}
.referrals {
  padding: 6px;
  background: #3bbeee;
  border: 1px solid #3bbeee;
  border-radius: 100px;
  &__text {
    @media (max-width: 405px) {
      display: none;
    }
  }
}
</style>
