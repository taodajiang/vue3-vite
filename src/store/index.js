
import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'

const store = createStore({
  state: {
  },
  getters: {
  },
  ...actions,
  ...mutations,
  modules: {},
  plugins: []
})

export default store
