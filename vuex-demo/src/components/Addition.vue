<template>
  <div>
    <!-- <h3>当前最新的count值为：{{$store.state.count}}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnAdd">+1</button>
    <button @click="btnAddAsync">+1 Async</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    btnAdd() {
      this.$store.commit('add', 2)
    },
    btnAddAsync() {
      this.$store.dispatch('addAsync', 1)
    }
  }
}
</script>
