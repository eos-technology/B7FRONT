<template>
  <div class="routes">
    <router-link class="routes__item" v-for="(item, index) in routes" :key="index"
      :to="{ name: item.route }">{{ item.name }}</router-link>
  </div>
</template>

<script setup>
const routes = [
  { name: "Dashboard", route: "Admin" },
  { name: "Compras", route: "Purchases" },
  { name: "Retiros", route: "Withdraw" },
  { name: "Academia", route: "Admin-Academy" },
  { name: "Señales", route: "Admin-Signs" },
  { name: "Trading live", route: "Admin-Trading-Live" },
  { name: "Membresías", route: "Admin-Memberships" },
  { name: "Usuarios", route: "Wallet" },
  { name: "Transacciones", route: "Transactions" },
  { name: "Tokens", route: "Admin-Tokens" },
  { name: "KYC", route: "kyc" },
];
</script>

<style lang="scss" scoped>
.routes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 385px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

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
