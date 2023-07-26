<template>
  <div>
    <GoBackDummy class="mb-5" @click="$router.go(-1)" />
    <section class="add-trade">
      <h3 class="h3-medium">Agregar trade</h3>
      <b-form class="form" @submit.stop.prevent>
        <div class="form__content">
          <b-form-group id="input-active" label="Activo *" label-for="active">
            <b-form-select v-model="form.active_id">
              <b-form-select-option :value="category.id" v-for="category in actives" :key="category.id">{{ category.name
              }}</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="input-broker" label="Cuenta de broker *" label-for="broker">
            <b-form-select v-model="form.broker_id">
              <b-form-select-option :value="category.id" v-for="category in brokers" :key="category.id">{{ category.name
              }}</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="input-gesture" label="Gesto *" label-for="gesture">
            <b-form-select v-model="form.side">
              <b-form-select-option value="Buy">Buy</b-form-select-option>
              <b-form-select-option value="Sell">Sell</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="input-date" label="Fecha de apertura *" label-for="date">
            <b-form-input id="date" v-model="form.open_date" type="date" required></b-form-input>
          </b-form-group>
          <b-form-group id="input-open" label="Tiempo de apertura *" label-for="open">
            <b-form-input type="time" id="open" v-model="form.open_time" placeholder="Input placerholder"
              required></b-form-input>
          </b-form-group>
          <b-form-group id="input-price" label="Precio de apertura *" label-for="price">
            <b-form-input id="price" v-model="form.open_price" placeholder="Input placerholder" required></b-form-input>
          </b-form-group>
          <b-form-group id="input-dateClose" label="Fecha de cierre *" label-for="dateClose">
            <b-form-input id="dateClose" v-model="form.close_date" type="date" required></b-form-input>
          </b-form-group>
          <b-form-group id="input-timeClose" label="Tiempo de cierre *" label-for="timeClose">
            <b-form-input type="time" id="timeClose" v-model="form.close_time" placeholder="Input placerholder"
              required></b-form-input>
          </b-form-group>
          <b-form-group id="input-close" label="Precio de cierre *" label-for="close">
            <b-form-input id="close" v-model="form.close_price" placeholder="Input placerholder" required></b-form-input>
          </b-form-group>
          <b-form-group id="input-stopLoss" label="Precio de stop loss *" label-for="stopLoss">
            <b-form-input id="stopLoss" v-model="form.stop_loss" placeholder="Input placerholder" required></b-form-input>
          </b-form-group>
          <b-form-group id="input-profit" label="Beneficio bruto *" label-for="profit">
            <b-form-input id="profit" v-model="form.benefit" placeholder="Input placerholder" required></b-form-input>
          </b-form-group>
          <b-form-group id="input-trade" label="Comisiones de trade *" label-for="trade">
            <b-form-input id="trade" v-model="form.comission" placeholder="Input placerholder" required></b-form-input>
          </b-form-group>
          <b-form-group id="input-trading" label="Estrategias de trading *" label-for="trading">
            <b-form-select v-model="form.strategy_id">
              <b-form-select-option :value="category.id" v-for="category in strategies" :key="category.id">{{
                category.name
              }}</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="input-status" label="Estado *" label-for="status">
            <b-form-input v-model="form.feeling" />
          </b-form-group>
        </div>

        <div class="form__btns">
          <b-button @click="$router.back(-1)" variant="outline">
            <p class="btn-info">Cancelar</p>
          </b-button>
          <b-button variant="primary" @click="onSubmit()">Agregar</b-button>
        </div>
      </b-form>
    </section>

    <section class="root">
      <teleport to="body">
        <div class="modal" v-if="isOpen">
          <div class="modal__body" @click="isOpen = false">
            <img class="modal__body-img" :src="getFile('images', 'auth', 'webp')" alt="" />
            <h3 class="h3-medium text-center">
              ¡Se ha agregado nuevo trade éxitosamente!
            </h3>
          </div>
        </div>
      </teleport>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      form: {
        active_id: null,
        broker_id: null,
        strategy_id: null,
        side: null,
        open_date: null,
        open_time: null,
        open_price: null,
        close_date: null,
        close_time: null,
        close_price: null,
        stop_loss: null,
        benefit: null,
        comission: null,
        feeling: null
      },
      loading: false
    }
  },
  created() {
    this.getActives()
    this.getBrokers()
    this.getStrategies()
  },
  methods: {
    ...mapActions('tradingPlan', ['getActives', 'storeTrading', 'getBrokers', 'getStrategies', 'getTradings']),
    changeFiles() {
      this.form.image = this.$refs.image.files[0]
    },
    onSubmit() {
      this.loading = true
      this.storeTrading(this.form).then(() => {
        this.loading = false
        openNotification()
        this.getTradings()
        this.$router.go(-1)
      })
    }
  },
  computed: {
    ...mapState('tradingPlan', ['actives', 'brokers', 'strategies'])
  }
}
</script>
<style lang="scss" scoped>
.add-trade {
  padding: 2.4rem;
  display: grid;
  gap: 4.8rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);

  @media (max-width: 720px) {
    padding: 1.2rem;
  }
}

.form {
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem 1.6rem;
    margin-bottom: 4.8rem;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }

  &__btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
