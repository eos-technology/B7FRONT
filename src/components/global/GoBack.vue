<template>
  <section class="btnBack" @click="$router.back()">
    <i class="b7-back"></i>
    <p class="b-light">Regresar</p>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.btnBack {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  &:hover {
    color: #ee8722;
  }
}
</style>
