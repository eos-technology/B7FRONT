<template>
  <section class="btnBack">
    <i class="b7-back"></i>
    <p class="b-light">Regresar</p>
  </section>
</template>

<script setup>
defineProps: {
  name: String;
}
</script>

<style lang="scss" scoped>
.btnBack {
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 8px;
  cursor: pointer;
  &:hover{
    color: #ee8722
  }
}
</style>
