import axios from 'axios'

export default {
  namespaced: true,
  state: {
    memberships: [],
    membershipsActive: [],
    total: 0,
    chart: []
  },
  getters: {},
  mutations: {
    SET_MEMBERSHIPS (state, data) {
        state.memberships.unshift(data)
    },
    GET_MEMBERSHIPS (state, data) {
      state.memberships = data
    },
    GET_MEMBERSHIPS_ACTIVE (state, data) {
      state.membershipsActive = data
    },
    GET_MEMBERSHIPS_TOTAL (state, data) {
      state.total = data.total
      state.chart = data.chart
    },
    UPDATE_MEMBERSHIP (state, data) {
        let objIndex = state.memberships.findIndex((obj => obj.id == data.id));
        state.memberships[objIndex] = data
    },
    REMOVE_MEMBERSHIP (state, id) {
        const indexOfObject = state.memberships.findIndex(object => {
           return object.id === id;
        });
        state.memberships.splice(indexOfObject)
    }
  },
  actions: {
    async getMemberships (context) {
        const response = await axios.get('/api/v1/membership')
        context.commit('GET_MEMBERSHIPS', response.data.data)
        return response.data.meta
    },
    async getMembershipsAdmin (context) {
      const response = await axios.get('/api/v1/membership/admin')
      context.commit('GET_MEMBERSHIPS', response.data.data)
      return response.data.meta
  },
    async storeMembership (context, data) {
        const response = await axios.post('/api/v1/membership', data)
        context.commit('SET_MEMBERSHIPS', response.data)
        return response.data
    },
    async updateMembership (context, payload) {
        const response = await axios.post(`/api/v1/membership/update/${payload.id}`, payload.data)
        context.commit('UPDATE_MEMBERSHIP', response.data)
        return response.data
    },
    async destroyMembership (context, id) {
        const response = await axios.get(`/api/v1/membership/delete/${id}`)
        context.commit('REMOVE_MEMBERSHIP', id)
        return response.data.meta
    },
    async getMembershipsActive (context) {
      const response = await axios.get('/api/v1/membership/active')
      context.commit('GET_MEMBERSHIPS_ACTIVE', response.data)
      return response.data.meta
    },
    async getMembershipsActiveAdmin (context, payload) {
      const response = await axios.get(`/api/v1/membership/active/admin/${payload.username}/${payload.page}`)
      context.commit('GET_MEMBERSHIPS', response.data)
      return response.data
    },
    async getTotalsAdmin (context, payload) {
      const response = await axios.get(`/api/v1/membership/totals/${payload.type}`)
      context.commit('GET_MEMBERSHIPS_TOTAL', response.data)
      return response.data
    }
  }
}
