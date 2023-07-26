<template>
  <section class="membership" v-if="step === 1">
    <div class="membership__content">
      <div class="membership__header">
        <h2 class="h2-bold">{{ $t('membership.title') }}</h2>
        <b-button variant="primary" @click="step = 2">{{ $t('membershipadmin.create') }}</b-button>
      </div>
      <div class="token__grid">
        <div class="token__card token__card--blue">
          <h4 class="h4-bold">{{ $t('membershipadmin.sale') }}</h4>

          <div class="count">
            <div class="count__box">
              <p class="l-medium">{{ $t('membershipadmin.total') }}</p>
              <div class="count__box-data">$0.000</div>
            </div>
            <div class="count__box">
              <p class="l-medium">{{ $t('membershipadmin.memberships') }}</p>
              <div class="count__box-data">10608</div>
            </div>
            <div class="count__box">
              <p class="l-medium">{{ $t('membershipadmin.all') }}</p>
              <div class="count__box-data">607000</div>
            </div>
          </div>

          <div class="token__progress">
            <p>${{ value }} pledget of ${{ max }} goal</p>
            <b-progress
              variant="success"
              :value="value"
              :max="max"
            ></b-progress>
          </div>
          <b-button variant="primary" @click="isOpen = true"
            >{{ $t('membershipadmin.create') }}</b-button
          >
        </div>
        <div class="token__card token__card--blue"><ChartToken /></div>
      </div>
    </div>

    <div class="left-tabs">
      <b-tabs pills>
        <b-tab :title="$t('membershipadmin.tabMemberships')" active><Memberships @showMembership="step = 3"/></b-tab>
        <b-tab :title="$t('membershipadmin.acquired')"><AcquiredTab /></b-tab>
      </b-tabs>
    </div>
  </section>

  <section class="create" v-if="step === 2">
    <GoBackDummy @click="step = 1" />
    <CreateMembership />
  </section>

  <section class="create" v-if="step === 3">
    <GoBackDummy @click="step = 1" />
    <EditMembership />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ChartToken from "./charts/ChartToken.vue";
import Memberships from "./content/Memberships.vue";
import AcquiredTab from "./content/AcquiredTab.vue";
import CreateMembership from "./content/CreateMembership.vue";
import EditMembership from "./content/EditMembership.vue";

const value = ref(18090);
const max = ref(25000);

const step = ref(1);
</script>

<style lang="scss" scoped>
.membership {
  display: grid;
  gap: 4.8rem;
  &__content {
    display: grid;
    gap: 2.4rem;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
  }
}

.token {
  display: grid;
  gap: 2.4rem;
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    @media ((max-width: 1100px)) {
      grid-template-columns: 1fr;
      gap: 2.4rem;
    }
  }
  &__card {
    display: flex;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    border-radius: 16px;
    &--blue {
      border: 1px solid #7d79e7;
      background: rgba(60, 57, 135, 0.1);
    }
    &--green {
      border: 1px solid var(--brand-verde, #48a254);
      background: rgba(73, 135, 73, 0.1);
    }
    &--yellow {
      border: 1px solid var(--inputs-radio-checkbox-toggle-active, #ee8722);
      background: rgba(237, 135, 34, 0.1);
    }
    &--cyan {
      border: 1px solid var(--brand-azul-claro, #3bbeee);
      background: rgba(59, 190, 238, 0.1);
    }
    @media ((max-width: 600px)) {
      padding: 1.2rem;
    }
  }
  &__progress {
    display: grid;
    gap: 8px;
  }
  &__height {
    height: fit-content;
  }
  &__list {
    display: grid;
    gap: 1.6rem;
    &-item {
      display: flex;
      gap: 1.6rem;
      align-items: center;
    }
    &-icon {
      background-color: #3c3987;
      border-radius: 100px;
      width: 2.4rem;
      height: 2.4rem;
      display: grid;
      place-content: center;
    }
  }
}

.count {
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);
  @media ((max-width: 600px)) {
    grid-template-columns: repeat(2, 1fr);
  }
  &__box {
    display: grid;
    gap: 8px;
    text-align: center;
    &-data {
      display: flex;
      padding: 16px;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.1);
    }
  }
}

.create {
  display: grid;
  gap: 4.8rem;
}
</style>
