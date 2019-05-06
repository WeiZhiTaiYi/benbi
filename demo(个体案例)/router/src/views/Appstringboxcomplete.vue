<template>
  <div id="app">
    <!-- <router-view/> -->
    <AppMenu id='menu'></AppMenu>
    <AppStringbox></AppStringbox>
  </div>
</template>

<script>
import AppMenu from './AppMenu'
import AppStringbox from './AppStringbox'
export default {
    name:'app',
    components:{ AppMenu, AppStringbox }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#menu{
  position: absolute;
  top: 0rem;
  z-index: 1;
}
</style>
