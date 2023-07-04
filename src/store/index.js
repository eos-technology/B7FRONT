import { createStore } from 'vuex'

import vuexPersistence from '../plugins/vue-persistence'
import auth from './modules/auth'
import interceptors from './modules/interceptors'
import utils from './modules/utils'
import academy from './modules/academy'

export default createStore({
  state: {
    appName: 'KodexPay',
    loading: false,
    progressBar: null
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    interceptors,
    utils,
    academy
  },
  plugins: [vuexPersistence.plugin]
})
