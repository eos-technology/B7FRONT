<template>
  <section class="token" v-if="!purchase">
    <h2 class="h2-bold">{{ $t('membership.title') }}</h2>
    <div class="token__grid">
      <div class="select">
        <label class="select__item" :class="selected === member.id ? member.color : ''" v-for="member in memberships"
          :key="member.id">
          <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios"
            :value="member.id"></b-form-radio>
          <div class="select__text">
            <h3 class="h3-semibold">{{ member.name }}</h3>
            <h5 class="h5-medium">${{ coinFormat(member.price) }}</h5>
          </div>
        </label>
      </div>
      <!-- Q1 -->
      <div>
        <div v-for="member in memberships" :key="member.id">
          <section v-if="selected === member.id" class="token__card token__card--blue token__height">
            <video class="token__video" src="@/assets/video/Plan1.mp4" autoplay loop></video>
            <div class="anim"></div>
            <h3 class="h3-bold">Beneficios {{ member.name }}</h3>
            <div class="token__list">
              <div v-for="(item, index) in items" :key="index" class="token__list-item">
                <p class="l-light">{{ item.item }}</p>
                <i :class="`b7-check-line`" v-if="JSON.parse(member.benefits).includes(item.key)" />
                <i :class="`b7-close`" v-else />
              </div>
            </div>
            <b-button @click="$router.push({
              name: 'Purchase', params: {
                id: member.id
              }
            })">Comprar Paquete</b-button>
          </section>
        </div>
      </div>
    </div>
  </section>
  <PurchaseMembership v-if="purchase" @back="purchase = false" />
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      items: [
        { item: "Trading plans", key: "Transaction-Book" },
        { item: "Trading Live", key: "Trading-Live" },
        { item: "Signals", key: "Signals" },
        { item: "Academy", key: "Academy" },
        { item: "Crypto Wallets", key: "Wallets" },
        { item: "Team Chat", key: "Chat" },
        { item: "Transaction Book", key: "Transaction-Book" },
        { item: "Referrals Benefits", key: "Referral" },
      ]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions('membership', ['getMemberships']),
    getData() {
      this.getMemberships().then(() => {
        this.selected = this.memberships[0].id
      })
    }
  },
  computed: {
    ...mapState('membership', ['memberships'])
  }
}
</script>

<script setup>
import { ref } from "vue";
import { mapActions, mapState } from "vuex";

</script>

<style lang="scss" scoped>
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

      .b7-check-line {
        background-color: #3c3987;
        border-radius: 50%;
      }

      .b7-close {
        border-radius: 150px;
        background: rgba(253, 236, 236, 0.3);
      }
    }

    &--green {
      border: 1px solid var(--brand-verde, #48a254);
      background: rgba(73, 135, 73, 0.1);

      .b7-check-line {
        background-color: #48a254;
        border-radius: 50%;
      }

      .b7-close {
        border-radius: 150px;
        background: rgba(253, 236, 236, 0.3);
      }
    }

    &--yellow {
      border: 1px solid var(--inputs-radio-checkbox-toggle-active, #ee8722);
      background: rgba(237, 135, 34, 0.1);

      .b7-check-line {
        background-color: #ee8722;
        border-radius: 50%;
      }

      .b7-close {
        border-radius: 150px;
        background: rgba(253, 236, 236, 0.3);
      }
    }

    &--cyan {
      border: 1px solid var(--brand-azul-claro, #3bbeee);
      background: rgba(59, 190, 238, 0.1);

      .b7-check-line {
        background-color: #3bbeee;
        border-radius: 50%;
      }

      .b7-close {
        border-radius: 150px;
        background: rgba(253, 236, 236, 0.3);
      }
    }

    @media ((max-width: 600px)) {
      padding: 1.2rem;
    }
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
      justify-content: space-between;
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

  &__video {
    width: 100%;
  }
}

.select {
  display: grid;
  gap: 2.4rem;
  height: fit-content;

  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    gap: 24px;
    border-radius: 24px;
    border: 1px solid var(--brand-border, rgba(255, 255, 255, 0.2));

    &--blue {
      background-color: #3c3987;
      border: none;
    }

    &--green {
      background-color: #48a254;
      border: none;
    }
  }

  &__text {
    h3 {
      @media (max-width: 450px) {
        font-size: 2.4rem;
      }
    }
  }
}
</style>
