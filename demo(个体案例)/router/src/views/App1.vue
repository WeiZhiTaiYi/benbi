<template>
  <div id="app">
    <AppHead></AppHead>
    <AppContent></AppContent>
  
  </div>
</template>

<script>
// import {fontsizeset} from './fontsizeset.js'
import AppHead from './AppHead1'
import AppContent from './AppContent1'
export default {
  name: 'app',
  components:{AppHead,AppContent}
}
</script>

<style scoped>
#app {
  background-color: #fff;
}
*{
  margin: 0;
  padding: 0;
}
</style>
 