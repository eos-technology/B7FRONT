import axios from 'axios'

export default {
  namespaced: true,
  state: {
    access_token: null,
    user: null,
    abilities: []
  },
  getters: {},
  mutations: {
    SET_USER_DATA (state, data) {
      console.log({ dataSS: data })
      state.user = data
      state.lang = data.lang
      state.abilities = data.abilities
    },
    SET_ACCESS_TOKEN (state, data) {
      state.access_token = data.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + data.token
    },
    CLEAR_USER_DATA (state) {
      state.access_token = null
      state.user = null
      state.abilities = []
      localStorage.removeItem('vuex')
    }
  },
  actions: {
    async login (context, data) {
         const response = await axios.post('/api/v1/signin', data)
        context.commit('SET_ACCESS_TOKEN', response.data)
        context.dispatch('getUserInfo')
        return response.data
    },
    async register (context, data) {
        const response = await axios.post('/api/v1/signup', data)
        context.commit('SET_USER_DATA', response.data)
        return response.data
    },
    async getUserInfo (context) {
      const accounts = await axios.get('/api/v1/user/getInfo')
      context.commit('SET_USER_DATA', accounts.data)
    },
    async reset (context, data) {
      const response = await axios.post('/api/v1/reset-password', data)
      return response.data
    },
    async restore (context, data) {
      const response = await axios.post('/api/v1/restore-password', data)
      return response.data
    }
  }
}
