import { createStore } from 'vuex'

import vuexPersistence from '../plugins/vue-persistence'
import auth from './modules/auth'
import interceptors from './modules/interceptors'
import utils from './modules/utils'
import academy from './modules/academy'
import section from './modules/section'
import lesson from './modules/lesson'
import signal from './modules/signal'
import tradingLive from './modules/tradingLive'
import tradingPlan from './modules/tradingPlan'
import membership from './modules/membership'

export default createStore({
  state: {
    appName: 'B7Academy',
    loading: false,
    progressBar: null
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    interceptors,
    utils,
    academy,
    section,
    lesson,
    signal,
    tradingLive,
    tradingPlan,
    membership
  },
  plugins: [vuexPersistence.plugin]
})
