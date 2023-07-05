import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/auth",
    component: () => import("@/layouts/Auth.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/views/auth/Index.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/App.vue"),
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/views/dashboard/Index.vue"),
      },
      {
        path: "academy",
        name: "Academy",
        component: () => import("@/views/academy/Index.vue"),
      },
      {
        path: "signs",
        name: "Signs",
        component: () => import("@/views/signs/Index.vue"),
      },
      {
        path: "trading",
        name: "Trading-Live",
        component: () => import("@/views/tradingLive/Index.vue"),
      },
      {
        path: "plans",
        name: "Plans",
        component: () => import("@/views/tradingPlan/Index.vue"),
      },

      {
        path: "memberships",
        name: "Memberships",
        component: () => import("@/views/memberships/Index.vue"),
      },
      {
        path: "team",
        name: "Team",
        component: () => import("@/views/team/Index.vue"),
      },
      {
        path: "wallet",
        name: "Wallet",
        component: () => import("@/views/wallet/Index.vue"),
      },
      {
        path: "transactions",
        name: "Transactions",
        component: () => import("@/views/transactions/Index.vue"),
      },
      {
        path: "tokens",
        name: "Tokens",
        component: () => import("@/views/tokens/Index.vue"),
      },
      {
        path: "chats",
        name: "Chats",
        component: () => import("@/views/chats/Index.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("@/views/profile/Index.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("@/layouts/Admin.vue"),
    children: [
      {
        path: "",
        name: "Admin",
        component: () => import("@/views/admin/dashboard/Index.vue"),
      },
      {
        path: "purchases",
        name: "Purchases",
        component: () => import("@/views/admin/purchases/Index.vue"),
      },
      {
        path: "withdraw",
        name: "Withdraw",
        component: () => import("@/views/admin/withdraw/Index.vue"),
      },
      {
        path: "academy",
        name: "Admin-Academy",
        component: () => import("@/views/admin/academy/Index.vue"),
      },
      {
        path: "signs",
        name: "Admin-Signs",
        component: () => import("@/views/admin/signs/Index.vue"),
      },
      {
        path: "tradingLive",
        name: "Admin-Trading-Live",
        component: () => import("@/views/admin/tradingLive/Index.vue"),
      },
      {
        path: "memberships",
        name: "Admin-Memberships",
        component: () => import("@/views/admin/memberships/Index.vue"),
      },
      {
        path: "kyc",
        name: "kyc",
        component: () => import("@/views/admin/kyc/Index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: "exact-active",
});

export default router;
