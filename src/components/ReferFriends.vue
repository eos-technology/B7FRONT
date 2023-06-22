<template>
  <section class="refer">
    <p class="b-regular">{{ $t("globals.refer") }}</p>
    <div class="refer__copy">
      <p class="sm-regular">https://app.upcademy.net//#/aut</p>
      <i class="b7-copy"></i>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.refer {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  justify-content: center;
  border-radius: 16px;
  background: #201e61;
  &__copy {
    display: flex;
    justify-content: space-between;
    padding: 5px 12px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px dashed #ee8722;
    background: rgba(255, 255, 255, 0.05);
    i {
      font-size: 1.6rem;
      color: #ee8722;
    }
    &:hover {
      color: #ee8722;
      cursor: pointer;
    }
  }
}
</style>
