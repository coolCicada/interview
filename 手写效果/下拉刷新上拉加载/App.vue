<template>
  <div class="container">
   <up-load-down-refresh>
     <div v-for="(item, index) in list" :key="index">
       {{ item.name }}
     </div>
   </up-load-down-refresh>
  </div>
</template>

<script>
import UpLoadDownRefresh from './components/UpLoadDownRefresh.vue'
export default {
  data () {
    return {
      list: [
        { name: 'ls' },
        { name: 'ze' },
        { name: 'z4' },
        { name: 'tt' },
        { name: 'ys' },
      ]
    }
  },
  methods: {
    
  },
  components: {
    UpLoadDownRefresh
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  html, body, .container {
    height: 100%;
  }
  .container {
    background-color: palegoldenrod;
  }
</style>