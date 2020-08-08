const getters = {
  // 统计未完成的数据条数
  unDoneLength: state => {
    return state.app.list.filter(x => x.done === false).length
  },
  // 过滤数组，根据done的状态来分为全部，已完成和未完成
  infoList: state => {
    if (state.app.buttonType === 'done') {
      return state.app.list.filter(e => e.done === true)
    } else if (state.app.buttonType === 'undone') {
      return state.app.list.filter(e => e.done === false)
    } else {
      return state.app.list
    }
  }
}
export default getters
