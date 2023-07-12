import axios from 'axios'

export default {
  namespaced: true,
  state: {
    tradings: [],
    trading_top: null
  },
  getters: {},
  mutations: {
    SET_TRADING (state, data) {
        state.tradings.unshift(data)
    },
    GET_TRADING (state, data) {
      state.tradings = data
    },
    GET_TRADING_TOP (state, data) {
      state.trading_top = data
    },
    UPDATE_TRADING (state, data) {
        let objIndex = state.tradings.findIndex((obj => obj.id == data.id));
        state.tradings[objIndex] = data
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
        const response = await axios.get('/api/v1/trading')
        context.commit('GET_TRADING', response.data)
        return response.data.meta
    },
    async getTradingsLiveClass (context) {
      const response = await axios.get(`/api/v1/trading/${id}`)
      context.commit('GET_TRADING_TOP', response.data)
      return response.data.meta
    },
    async togleStatus (context, id) {
      const response = await axios.get(`/api/v1/trading/togle/${id}`)
      return response.data
    },
    async getTradingTop (context) {
      const response = await axios.get('/api/v1/trading/top')
      context.commit('GET_TRADING_TOP', response.data)
      return response.data.meta
    },
    async storeTrading (context, data) {
        const response = await axios.post('/api/v1/trading', data)
        context.commit('SET_TRADING', response.data)
        return response.data
    },
    async updateTrading (context, payload) {
        const response = await axios.post(`/api/v1/trading/update/${payload.id}`, payload.data)
        context.commit('UPDATE_TRADING', response.data)
        return response.data
    },
    async destroyTrading (context, id) {
        const response = await axios.get(`/api/v1/trading/delete/${id}`)
        context.commit('REMOVE_TRADING', id)
        return response.data.meta
    }
  }
}
