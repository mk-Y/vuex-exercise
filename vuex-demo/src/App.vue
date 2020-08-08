<template>
  <div id="app">
    Hello World!
    <addition></addition>
    <p>-------------------------------------</p>
    <subtraction></subtraction>
  </div>
</template>
<script>
import Addition from '@/components/Addition'
import Subtraction from '@/components/Subtraction'
export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Addition,
    Subtraction
  }
}
</script>
