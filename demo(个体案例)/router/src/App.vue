<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/"></router-link>
      <router-link to="/Sign"></router-link> -->
      <!-- <span id="num">{{count}}</span> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import { fontsizeset } from "./fontsizeset.js";

export default {
  name: "app",
  data() {
    return {
      // count: "" // 倒计时
    };
  },
  // created() {
  //   this.threeGo();
  // },

  // methods: {
  //   threeGo() {
  //     const TIME_COUNT = 3;
  //     if (!this.timer) {
  //       this.count = TIME_COUNT;
  //       this.show = false;
  //       this.timer = setInterval(() => {
  //         if (this.count > 0 && this.count <= TIME_COUNT) {
  //           this.count--;
  //         } else {
  //           this.show = true;
  //           clearInterval(this.timer);
  //           this.timer = null;
  //           // 跳转的页面写在此处
  //           this.$router.push({
  //             path: "/Sign"
  //           });
  //         }
  //       }, 1000);
  //     }
  //   }
  // }
};
</script>

<style scoped>
  #num {
    display: none;
  }
</style>

