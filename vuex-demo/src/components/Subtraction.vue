<template>
  <div>
    <!-- <h3>当前最新的count值为：{{num}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="substact">-1</button>
    <button @click="substactAsync({ amount: 1 })">-1 Async</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    // ...mapState(['count'])
    ...mapState({
      num: 'count'
    }),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub']),
    substact() {
      this.sub({ amount: 1 })
    },
    ...mapActions({
      substactAsync: 'subAsync'
    })
  }
}
</script>
