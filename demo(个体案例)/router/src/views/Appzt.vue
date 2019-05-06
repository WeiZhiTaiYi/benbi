<template>
  <div id="app">
    <AppHead></AppHead>
    <AppContent></AppContent>
  </div>
</template>

<script>
// import {fontsizeset} from './fontsizeset.js'
import AppHead from './AppHead'
import AppContent from './AppContent'
export default {
  name: 'app',
  components:{AppHead,AppContent}
}
</script>

<style>
#app {
  background-color: #fff;
}
*{
  margin: 0;
  padding: 0;
}
</style>
 