import { createRouter, createWebHashHistory } from "vue-router";
import store from '../store'

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
      {
        path: "register/:username?",
        name: "Signup",
        component: () => import("@/views/auth/Signup.vue"),
        props: true
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
        path: "academy/course/:id/:name",
        name: "Academy-Course",
        component: () => import("@/views/academy/content/SingleCourse.vue"),
        props: true
      },
      {
        path: "academy/video/:id/:name",
        name: "Academy-Video",
        component: () => import("@/views/academy/content/SingleVideo.vue"),
        props: true
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
        path: "plans/create",
        name: "Trading-Plan-Create",
        component: () => import("@/views/tradingPlan/content/AddTrader.vue"),
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
      {
        path: "purchase/:id/:price?",
        name: "Purchase",
        component: () => import("@/views/cart/Index.vue"),
        props: true
      },
      {
        path: "cart/pay/:id",
        name: "Purchase-Pay",
        component: () => import("@/views/cart/Qr.vue"),
        props: true
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
        path: "admin-tokens",
        name: "Admin-Tokens",
        component: () => import("@/views/admin/admin-tokens/Index.vue"),
      },
      {
        path: "kyc",
        name: "kyc",
        component: () => import("@/views/admin/kyc/Index.vue"),
      },
      {
        path: "users",
        name: "Admin-Users",
        component: () => import("@/views/admin/users/Index.vue"),
      },
      {
        path: "transactions",
        name: "Admin-Transactions",
        component: () => import("@/views/admin/transactions/Index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.state.auth.user

  /* to.name !== 'login' &&  */

  const publicPages = ['Login', 'RecoverPassword', 'Signup', 'RestorePassword']

  const authRequired = !publicPages.includes(to.name)

  if (authRequired && loggedIn === null) {
    next({
      name: 'Login',
      replace: true
    })
  } else {
    next()
    /* if(loggedIn != null && loggedIn.validated == 0 && loggedIn.validated != null && loggedIn.validated != undefined && to.name != 'Payment-Initial' && to.name != 'Cart') {
      next({
        path: '/payment-initial',
        replace: true
      })
    } else {
    } */
  }
})

export default router;
