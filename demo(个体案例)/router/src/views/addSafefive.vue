<template>
  <div id="addsafe">
    <div id="header">
      <div class="status-bar">
        <img :src="png" alt>
      </div>
      <div class="add">
        <img :src="return_png" class="return" @click="goTo">
        <span class="addsafe">{{add}}</span>
      </div>
    </div>
    <img :src="ico_png" alt class="ico">
    <span class="add-box">{{add_box}}</span>
    <span class="automatic">{{automatic}}</span>
    <router-link :to="{name:'addSafe'}">
      <span class="QR-code">{{qr_code}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "addsafe",
  data() {
    return {
      png: require("../assets/状态栏.png"),
      return_png: require("../assets/Return.png"),
      add: "添加保险箱",
      ico_png: require("../assets/ico.png"),
      add_box: "添加保险箱",
      automatic: "扫一扫保险箱二维码即可自动添加保险箱",
      qr_code: "扫描二维码添加"
    };
  },
  methods: {
    goTo() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#header {
  width: 7.5rem;
  height: 1.28rem;
  float: left;
}
.status-bar {
  float: left;
  width: 7.5rem;
  height: 0.4rem;
  background-color: #000000;
}
.status-bar img {
  float: left;
  width: 7.5rem;
}
.add {
  float: left;
  width: 7.5rem;
  height: 0.88rem;
  background-color: #17181a;
}
.return {
  float: left;
  width: 0.15rem;
  height: 0.3rem;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.addsafe {
  float: left;
  font-size: 0.31rem;
  color: #ffffff;
  margin-top: 0.28rem;
  margin-left: 2.46rem;
}
.ico {
  float: left;
  width: 2.41rem;
  height: 2.41rem;
  margin-top: 1.79rem;
  margin-left: 2.55rem;
}
.add-box {
  float: left;
  font-size: 0.45rem;
  margin-left: 2.62rem;
  margin-top: 0.39rem;
}
.automatic {
  float: left;
  font-size: 0.29rem;
  color: #999999;
  margin-top: 0.29rem;
  margin-left: 0.98rem;
}
.QR-code {
  float: left;
  font-size: 0.35rem;
  color: #0091fc;
  margin-top: 4.56rem;
  margin-left: 2.46rem;
}
</style>
