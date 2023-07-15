<template>
  <div class="routes">
    <router-link class="routes__item" v-for="(item, index) in routes" :key="index"
      :to="{ name: item.route }">{{ $t(item.name) }}</router-link>
  </div>
  
</template>

<script setup>
const routes = [
  { name: "Dashboard", route: "Dashboard" },
  { name: "routes.academy", route: "Academy" },
  { name: "routes.signals", route: "Signs" },
  { name: "routes.tradingLive", route: "Trading-Live" },
  { name: "routes.plans", route: "Plans" },
  { name: "routes.memberships", route: "Memberships" },
  { name: "routes.team", route: "Team" },
  { name: "routes.wallet", route: "Wallet" },
  { name: "routes.transactions", route: "Transactions" },
  { name: "Tokens", route: "Tokens" },
  { name: "Chats", route: "Chats" },
  { name: "routes.profile", route: "Profile" },
];
</script>

<style lang="scss" scoped>
.routes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  @media (max-width:400px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width:385px) {
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
