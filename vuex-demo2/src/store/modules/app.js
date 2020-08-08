import axios from 'axios'

const state = {
  // 所有的任务列表
  list: [],
  // 文本框的内容
  inputValue: 'aa',
  // 下一个Id
  nextId: 5,
  buttonType: 'all'
}

const mutations = {
  initList: (state, list) => {
    state.list = list
  },
  // 为 store 中的 inputValue 赋值
  setInputValue: (state, value) => {
    state.inputValue = value
  },
  // 添加列表项
  addItem: state => {
    state.list.push({
      id: state.nextId,
      info: state.inputValue.trim(),
      done: false
    })
    state.nextId++
    state.inputValue = ''
  },
  // 删除列表项
  removeItem: (state, id) => {
    // 根据id查找对应项
    const i = state.list.findIndex(x => x.id === id)
    if (i !== -1) {
      state.list.splice(i, 1)
    }
    // 根据索引删除对应的元素
  },
  // 更改状态
  ChangeStatus: (state, { id, status }) => {
    console.log(id, status)
    const i = state.list.findIndex(x => x.id === id)
    if (i !== -1) {
      state.list[i].done = status
    }
  },
  // 清除所有已完成的数据
  clearDone: state => {
    state.list = state.list.filter(x => x.done === false)
  },
  CheckStatus: (state, v) => {
    state.buttonType = v
  }
}

const actions = {
  getList({ commit }) {
    axios.get('/list.json').then(({ data }) => {
      commit('initList', data)
    })
  }
}
export default {
  // 命名空间，当开启时，在使用模块自己的mutations，actions，getters时需要带上模块的空间名称
  // 如：this.$store.dispatch('app/getList') 和 this.$store.commit('app/CheckStatus','done')
  // 或 mapActions(['app/getList']) 和 mapMutations(['app/CheckStatus'])
  namespaced: true,
  state,
  mutations,
  actions
}
