<template>
  <div id="app">
    <a-input placeholder='请输入任务' class="my_ipt" :value='inputValue' @change="handleInput"></a-input>
    <a-button type='primary' @click="addItemToList">添加事项</a-button>
    <a-list bordered :dataSource='infoList' class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked='item.done' @change="({target})=>{cbStatusChanged(target, item.id)}">{{item.info}}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItemById(item.id)">删除</a>
      </a-list-item>
      <!-- footer区域 -->
      <div slot="footer" class="footer">
        <!-- 未完成的任务个数 -->
        <span>{{unDoneLength}}条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button :type="buttonType === 'all'?'primary':''" @click="selectItem('all')">全部</a-button>
          <a-button :type="buttonType === 'undone'?'primary':''" @click="selectItem('undone')">未完成</a-button>
          <a-button :type="buttonType === 'done'?'primary':''" @click="selectItem('done')">已完成</a-button>
        </a-button-group>
        <!-- 把已经完成的任务清空 -->
        <a @click="clearAllDone">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>
<script>
// import { createNamespacedHelpers } from 'vuex'
// const { mapMutations, mapActions, mapState } = createNamespacedHelpers('app')
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'app',
  data() {
    return {}
  },
  computed: {
    ...mapState('app', ['list', 'inputValue', 'buttonType']),
    // ...mapState({
    //   list: state => state.app.list,
    //   inputValue: state => state.app.inputValue,
    //   buttonType: state => state.app.buttonType
    // }),
    unDoneLength() {
      return this.$store.getters.unDoneLength
    },
    infoList() {
      return this.$store.getters.infoList
    }
  },
  methods: {
    ...mapActions('app', ['getList']),
    ...mapMutations('app', ['setInputValue', 'addItem', 'removeItem', 'ChangeStatus', 'clearDone', 'CheckStatus']),
    handleInput(e) {
      this.setInputValue(e.target.value)
    },
    addItemToList() {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('文本框不能为空！')
      }
      this.addItem()
    },
    // 根据id删除对应的任务事项
    removeItemById(id) {
      this.removeItem(id)
    },
    // 监听复选框选中状态变化的事件
    cbStatusChanged(e, id) {
      // 通过event.target.checked获取选中的状态
      const status = e.checked
      this.ChangeStatus({ id, status })
    },
    // 清除所有已完成的数据
    clearAllDone() {
      this.clearDone()
    },
    // 切换顶部按钮选中状态
    selectItem(v) {
      this.CheckStatus(v)
    }
  },
  created() {
    console.log(this.$store)
    this.getList()
  }
}
</script>
<style scoped>
  #app{
    padding: 10px;
  }
  .my_ipt{
    width: 500px;
    margin-right: 10px;
  }
  .dt_list{
    width: 500px;
    margin-top: 10px;
  }
  .footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
