<template>
  <section class="dashboard">
    <!-- Widget -->
    <iframe
      scrolling="no"
      allowtransparency="true"
      frameborder="0"
      src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22US%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A76%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fticker-tape%2F%22%7D"
      style="box-sizing: border-box; display: block; height: 44px; width: 100%"
    ></iframe>
    <h2 class="h2-bold">Dashboard</h2>
    <!-- Banner -->
    <article class="dashboard__banner">
      <div class="dashboard__banner-box">
        <div class="dashboard__banner-flex">
          <h2 class="h2-bold h2-bold-yellow">{{ $t("dashboard.earning") }}</h2>
          <h2 class="h2-bold">{{ $t("dashboard.whileLearn") }}</h2>
          <p class="l-light">
            {{ $t("dashboard.withb7") }}
          </p>
          <b-button variant="success">{{ $t("globals.availablePlans") }}</b-button>
        </div>
        <img :src="getFile('images', 'dashboard-learning', 'png')" alt="" />
      </div>
    </article>
    <!-- Cards -->
    <article class="dashboard__banner-cards">
      <div class="dashboard__banner-card">
        <img :src="getFile('images', 'brand', 'png')" alt="" />
        <div class="dashboard__banner-text">
          <div>
            <p class="b-regular">{{ $t("dashboard.estimated") }}</p>
            <p class="l-bold">$0.000</p>
          </div>
          <i class="b7-dollar dashboard__banner-icon"></i>
        </div>
      </div>
      <div class="dashboard__banner-card">
        <img :src="getFile('images', 'brand', 'png')" alt="" />
        <div class="dashboard__banner-text">
          <div>
            <p class="b-regular">{{ $t("dashboard.activeMembership") }}</p>
            <p class="l-bold">$0.000</p>
          </div>
          <i class="b7-dollar dashboard__banner-icon"></i>
        </div>
      </div>
      <div class="dashboard__banner-card">
        <img :src="getFile('images', 'brand', 'png')" alt="" />
        <div class="dashboard__banner-text">
          <div>
            <p class="b-regular">{{ $t("dashboard.referredUsers") }}</p>
            <p class="l-bold">$0.000</p>
          </div>
          <i class="b7-dollar dashboard__banner-icon"></i>
        </div>
      </div>
      <ReferFriends class="dashboard__banner-refer" />
    </article>
    <!-- Down Cards -->
    <article class="down">
      <div class="down__card down__card--light-blue">
        <h4 class="h4-bold">Ranking Referral</h4>
        <div class="down__users">
          <div class="down__user">
            <img class="down__user-sm" :src="getFile('icons', 'user1')" alt="" />
            <div class="text-center">
              <p class="sm-light sm-user">Diego Pastrana</p>
              <p class="b-bold">90</p>
            </div>
          </div>
          <div class="down__user">
            <img class="down__user-big" :src="getFile('icons', 'user2')" alt="" />
            <div class="text-center">
              <p class="b-bold text-primary big-user">María Quintero</p>
              <h4 class="h4-bold text-primary big-user-bold">250</h4>
            </div>
          </div>
          <div class="down__user">
            <img class="down__user-sm" :src="getFile('icons', 'user3')" alt="" />
            <div class="text-center">
              <p class="sm-light sm-user">Luis Perez</p>
              <p class="b-bold">45</p>
            </div>
          </div>
        </div>
      </div>
      <div class="down__card down__card--purple">
        <h4 class="h4-bold">Mis Wallets</h4>
        <ChartDonut />
      </div>
      <div class="down__card down__card--green">
        <div class="down__card-header">
          <div class="down__card-box">
            <i class="b7-cup"></i>
            <h4 class="h4-bold">Beneficios</h4>
          </div>
          <div class="down__card-tag">
            <p class="h6-bold text-black">PRO</p>
          </div>
        </div>
        <div class="down__card-body">
          <div class="down__card-info">
            <div class="d-flex align-items-center gap-2">
              <i class="b7-withdrawl"></i>
              <p class="l-light">Retiros</p>
            </div>
            <i class="b7-check text-primary"></i>
          </div>
          <div class="down__card-info">
            <div class="d-flex align-items-center gap-2">
              <i class="b7-chart"></i>
              <p class="l-light">Señales</p>
            </div>
            <i class="b7-check text-primary"></i>
          </div>
          <div class="down__card-info">
            <div class="d-flex align-items-center gap-2">
              <i class="b7-graduated"></i>
              <p class="l-light">Academia</p>
            </div>
            <i class="b7-check text-primary"></i>
          </div>
          <div class="down__card-info">
            <div class="d-flex align-items-center gap-2">
              <i class="b7-trading"></i>
              <p class="l-light">Trading Plans</p>
            </div>
            <i class="b7-check text-primary"></i>
          </div>
          <div class="down__card-info">
            <div class="d-flex align-items-center gap-2">
              <i class="b7-live"></i>
              <p class="l-light">Trading Live</p>
            </div>
            <i class="b7-check text-primary"></i>
          </div>
        </div>
        <b-button variant="primary">{{ $t("globals.availablePlans") }}</b-button>
      </div>
    </article>
  </section>
</template>

<script setup>
import ChartDonut from "./charts/ChartDonut.vue";
</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  gap: 2.4rem;
  &__banner {
    &-box {
      display: grid;
      gap: 1.6rem;
      .h2-bold {
        &-yellow {
          color: #ee8722;
        }
        @media (max-width: 600px) {
          text-align: center;
          font-size: 3rem;
          line-height: 3.8rem;
        }
      }
      padding: 2.4rem;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(14, 15, 52, 0.56) 21.06%,
        rgba(50, 54, 129, 0.21) 48.95%,
        rgba(14, 15, 52, 0.7) 77.67%
      );
      border-radius: 48px;
      width: 100%;
      height: 100%;
      @media (min-width: 600px) {
        background: none;
        background-image: url("@/assets/images/banner-dashboard.webp");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        grid-template-columns: 60% 1fr;
        padding: 9.8rem 8rem;
        align-items: center;
      }
      @media (min-width: 1100px) {
        grid-template-columns: 50% 1fr;
        padding: 7.8rem 6rem;
      }
      @media (max-width: 600px) {
        padding: 12px;
      }
      img {
        width: 100%;
      }
    }
    &-flex {
      display: grid;
      gap: 1.6rem;
    }
    &-cards {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;
    }
    &-card {
      flex: 1;
      display: flex;
      padding: 2px 24px 6px 4px;
      gap: 1.6rem;
      background: #201e61;
      border-radius: 16px;
    }
    &-text {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: space-between;
      width: 100%;
    }
    &-icon {
      padding: 10px;
      gap: 10px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.05);
      color: #ee8722;
    }
    &-refer {
      flex: 1;
    }
  }
}

.down {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  &__card {
    display: flex;
    flex-direction: column;
    padding: 32px;
    justify-content: space-between;
    gap: 16px;
    flex: 1;
    align-self: stretch;
    border-radius: 16px;
    @media (max-width: 430px) {
      padding: 16px;
    }
    &--light-blue {
      border: 1px solid #3bbeee;
      background: rgba(59, 190, 238, 0.1);
    }
    &--purple {
      border: 1px solid #7d79e7;
      background: rgba(60, 57, 135, 0.1);
    }
    &--green {
      border: 1px solid var(--brand-verde, #48a254);
      background: rgba(72, 162, 84, 0.1);
    }
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    &-box {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    &-tag {
      display: flex;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      width: fit-content;
      gap: 4px;
      border-radius: 8px;
      background: #fff;
      @media (max-width: 340px) {
        width: 100%;
      }
    }
    .b7-cup {
      display: flex;
      padding: 8px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.1);
    }
    &-info {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      align-items: center;
    }
    &-body {
      display: grid;
      gap: 8px;
    }
  }
  &__users {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  &__user {
    display: grid;
    gap: 1.6rem;
    justify-items: center;
    @media (max-width: 430px) {
      gap: 1.2rem;
    }
    &-sm {
      width: 9rem;
      height: 9rem;
      @media (max-width: 430px) {
        width: 6rem;
        height: 7rem;
      }
    }
    &-big {
      width: 10rem;
      height: 10rem;
      @media (max-width: 430px) {
        width: 7rem;
        height: 7rem;
      }
    }
  }
  .sm-user {
    @media (max-width: 380px) {
      font-size: 10px;
    }
  }
  .big-user {
    @media (max-width: 380px) {
      font-size: 12px;
    }
    &-bold {
      @media (max-width: 430px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}
</style>
