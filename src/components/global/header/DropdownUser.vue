<template>
  <div class="drop" @click="toggleMenu">
    <b-avatar badge="7" :src="getFile('icons', 'avatar')" />
  </div>
  <div v-show="menu" class="drop__menu">
    <div class="drop__menu-header">
      <p class="b-medium text-black">{{ $t("header.options") }}</p>
    </div>
    <div class="drop__menu-body">
      <router-link to="#" @click="toggleMenu">{{
        $t("header.profile")
      }}</router-link>
      <router-link to="#" @click="toggleMenu">{{
        $t("header.logout")
      }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menu = ref(false);

const toggleMenu = () => {
  menu.value = !menu.value;
};

const handleClickOutside = (event) => {
  if (!event.target.closest(".drop")) {
    menu.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="scss" scoped>
.drop {
  position: relative;
  cursor: pointer;
  &__menu {
    background-color: #fff;
    top: 78px;
    right: 4%;
    position: absolute;
    width: 137px;
    background: #ffffff;
    box-shadow: 0px 4px 6px -4px rgba(16, 24, 40, 0.1),
      0px 10px 15px -3px rgba(16, 24, 40, 0.1);
    border-radius: 16px;
    &-header {
      padding: 8px 24px;
      border-bottom: 1px solid #ececee;
    }
    &-body {
      padding: 8px 24px 16px;
      width: 100%;
      display: grid;
      gap: 8px;
      a {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.7rem;
        display: block;
        color: #000;
        text-decoration: none;
        &:hover {
          color: #ee8722;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
