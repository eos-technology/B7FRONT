<template>
  <div class="routes">
    <router-link
      class="routes__item"
      v-for="(item, index) in routes"
      :key="index"
      :to="{ name: item.route }"
      >{{ item.name }}</router-link
    >
  </div>
</template>

<script setup>
const routes = [
  { name: "Dashboard", route: "Dashboard" },
  { name: "Academia", route: "Academy" },
  { name: "Señales", route: "Signs" },
  { name: "Trading live", route: "Trading-Live" },
  { name: "Planes", route: "Plans" },
  { name: "Membresias", route: "Memberships" },
  { name: "Equipo", route: "Team" },
  { name: "Billetera", route: "Wallet" },
  { name: "Transacciones", route: "Transactions" },
  { name: "Tokens", route: "Tokens" },
  { name: "Chats", route: "Chats" },
];
</script>

<style lang="scss" scoped>
.routes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  a {
    color: #b5c2d7;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    text-align: center;
    text-decoration: none;
    &.exact-active {
      background-color: #ee8722;
      font-weight: 500;
      color: #fff;
    }
  }
  &__item {
    padding: 8px 16px;
    gap: 10px;
    background: rgba(255, 255, 255, 0.07);
    border-radius: 100px;
  }
}
</style>
