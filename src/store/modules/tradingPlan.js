import axios from 'axios'

export default {
  namespaced: true,
  state: {
    tradings: [],
    actives: [],
    strategies: [],
    brokers: [],
    stats: null
  },
  getters: {},
  mutations: {
    SET_TRADING (state, data) {
        state.tradings.unshift(data)
    },
    GET_TRADING (state, data) {
      state.tradings = data
    },
    GET_STATS (state, data) {
      state.stats = data
    },
    GET_ACTIVES(state, data) {
        state.actives = data
    },
    GET_BROKERS(state, data) {
        state.brokers = data
    },
    GET_STRATEGY(state, data) {
        state.strategies = data
    },
    REMOVE_TRADING (state, id) {
        const indexOfObject = state.tradings.findIndex(object => {
           return object.id === id;
        });
        state.tradings.splice(indexOfObject)
    }
  },
  actions: {
    async getTradings (context) {
        const response = await axios.get('/api/v1/trading-plans')
        context.commit('GET_TRADING', response.data)
        return response.data.meta
    },
    async getTradingTop (context) {
      const response = await axios.get('/api/v1/trading-plans/stat')
      context.commit('GET_STATS', response.data)
      return response.data.meta
  },
    async storeTrading (context, data) {
        const response = await axios.post('/api/v1/trading-plans', data)
        return response.data
    },
    async destroyTrading (context, id) {
        const response = await axios.get(`/api/v1/trading-plans/delete/${id}`)
        context.commit('REMOVE_TRADING', id)
        return response.data.meta
    },
    async getActives (context) {
        const response = await axios.get('/api/v1/trading-plans/active')
        context.commit('GET_ACTIVES', response.data)
        return response.data
    },
    async getBrokers (context) {
        const response = await axios.get('/api/v1/trading-plans/broker')
        context.commit('GET_BROKERS', response.data)
        return response.data
    },
    async getStrategies (context) {
        const response = await axios.get('/api/v1/trading-plans/strategy')
        context.commit('GET_STRATEGY', response.data)
        return response.data
    },
  }
}
