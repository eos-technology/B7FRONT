import axios from 'axios'

export default {
  namespaced: true,
  state: {
    countries: null
  },
  getters: {},
  mutations: {
    SET_COUNTRIES (state, data) {
      state.countries = data
    }
  },
  actions: {
    async getCountries (context) {
      const accounts = await axios.get('/api/v1/utils/countries')
      context.commit('SET_COUNTRIES', accounts.data)
    }
  }
}
