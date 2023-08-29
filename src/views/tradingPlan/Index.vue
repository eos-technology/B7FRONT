<template>
  <div class="plan">
    <div class="plan__header">
      <h2 class="h2-bold">Trading plan</h2>
      <b-button variant="primary" @click="$router.push({ name: 'Trading-Plan-Create' })">Añadir trade</b-button>
    </div>

    <div class="plan__chart">
      <ChartPlans />
    </div>

    <div class="plan__filter">
      <div class="search-filter">
        <div class="field-search">
          <b-form-input @keyup.enter="getData()" type="search" v-model="payload.active" placeholder="Search"
            class="b-light"></b-form-input>
          <i class="b7-search"></i>
        </div>
      </div>
      <Filter />
    </div>

    <!-- TABLE -->
    <div class="plan__table" v-if="tradings && tradings.data">
      <div class="plan__header">
        <h6 class="h6-bold">Trades</h6>
      </div>
      <div class="table" v-dragscroll.x>
        <table class="table__container">
          <thead>
            <tr>
              <th>ACTIVO</th>
              <th>GESTO</th>
              <th>FECHA APERTURA</th>
              <th>PRECIO ENTRADA</th>
              <th>ESTRATEGIA</th>
              <th>BENEFICIO NETO</th>
              <th>RIESGO MONETARIO</th>
              <th>ESTADO</th>
              <!-- <th>ACTIONS</th> -->
            </tr>
          </thead>
          <tbody class="table__body">
            <tr class="table__tr" v-for="(item, index) in tradings.data" :key="index">
              <td>{{ item.active?.name }}</td>
              <td>{{ item.side }}</td>
              <td>{{ formatDate(item.open_date, 'Y-MM-DD') }} {{ item.open_time }}</td>
              <td>${{ coinFormat(item.open_price) }}</td>
              <td>{{ item.strategy?.name }}</td>
              <td>${{ coinFormat(item.benefit) }}</td>
              <td>${{ item.risk }}</td>
              <td>{{ item.actions }}</td>
              <!-- <td class="table__actions">
                <i class="b7-eye"></i>
                <i class="b7-pen"></i>
                <i class="b7-trash"></i>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
      <b-pagination align="center" v-model="payload.page" pills :total-rows="tradings.meta.total"></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ChartPlans from "./charts/ChartPlans.vue";
import moment from 'moment'
export default {
  components: {
    ChartPlans
  },
  data() {
    return {
      loading: false,
      payload: {
        page: 1,
        active: null
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions('tradingPlan', ['getTradings']),
    getData() {
      this.loading = true
      this.getTradings(this.payload).then(() => {
        this.loading = false
      })
    },
    format_date(value) {
      return moment(value).format('LL')
    }
  },
  computed: {
    ...mapState('tradingPlan', ['tradings'])
  },
  watch: {
    'payload.page': function (val) {
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
.plan {
  display: grid;
  gap: 2.4rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;
  }

  &__filter {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  &__table {
    padding: 2.4rem;
    display: grid;
    gap: 2.4rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.05);

    @media (max-width: 600px) {
      padding: 1.2rem;
    }
  }
}

.trade {
  display: grid;
  gap: 4.8rem;
}
</style>
