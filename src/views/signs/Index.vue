<template>
  <section class="signs">
    <h2 class="h2-bold">{{ $t("signs.signs") }}</h2>
    <div class="signs__cards">
      <Cards :signal="signal" v-for="signal in signals" :key="signal.id" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Cards from "./content/Cards.vue";
export default {
  components: {
    Cards
  },
  data() {
    return {
      loading: false
    }
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions('signal', ['getSignals']),
    getData() {
      this.loading = true
      this.getSignals().then(() => {
        this.loading = false
      })
    }
  },
  computed: {
    ...mapState('signal', ['signals'])
  }
}
</script>

<style lang="scss" scoped>
.signs {
  display: grid;
  gap: 2.4rem;

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;

    @media (max-width: 1180px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 860px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
