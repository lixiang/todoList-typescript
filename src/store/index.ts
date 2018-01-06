
import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo/index.ts'

Vue.use(Vuex)

const debug:boolean = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    todo,
  },
})
