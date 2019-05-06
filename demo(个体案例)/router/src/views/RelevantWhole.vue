<template>
  <div id="app">
    <AppAssociatedUsersHead></AppAssociatedUsersHead>
    <AppAssociatedUsersContent></AppAssociatedUsersContent>
  </div>
</template>

<script>
// import {fontsizeset} from './fontsizeset.js'
import AppAssociatedUsersHead from './AppAssociatedUsersHead'
import AppAssociatedUsersContent from './AppAssociatedUsersContent'
export default {
  name: 'app',
  components:{AppAssociatedUsersHead,AppAssociatedUsersContent}
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>