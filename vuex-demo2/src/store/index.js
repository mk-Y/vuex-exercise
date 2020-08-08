import Vue from 'vue'
import Vuex from 'vuex'
// import app from '@/store/modules/app'
import getters from '@/store/getters'
Vue.use(Vuex)
// console.log(app)

// require.context(),是webpack自带的api
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, path) => {
  const modulesName = path.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(path)
  modules[modulesName] = value.default
  return modules
}, {})
console.log(modules)
export default new Vuex.Store({
  // modules: {
  //   app
  // },
  modules,
  getters
})
