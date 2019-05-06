<template>
  <div class="header">
    <!-- <img :src="status" alt="" class="status"> -->
    <img :src="jiao33" alt class="jiao33" @click="return_goTo">
    <!-- <a href class="jiao33" @click="return_goTo">‹</a> -->
    <p class="t12">{{coffer0}}</p>
    <div class="body">
      <p class="t22">{{coffer}}</p>
      <ul class="t33">
        <li>{{coffer1}}</li>
        <li>{{coffer2}}</li>
        <li>{{coffer3}}</li>
      </ul>
      <input type="text" class="so" placeholder="请输入保险箱名称" style="outline:none;">
      <a href class="r11">
        <router-link :to="{name:'AppDateils'}">
          <button class="btn11">{{coffer4}}</button>
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // status:require('../assets/状态栏.png'),
      jiao33: require("../assets/Return.png"),
      coffer0: "添加保险箱",
      coffer: "保险箱信息",
      coffer1: "保险箱品牌：三星",
      coffer2: "保险箱序列号：12335566hdhhjasdj",
      coffer3: "保险箱IP：192.168.1.1",
      coffer4: "添加保险箱"
    };
  },
  methods: {
    return_goTo() {
      this.$router.replace("/addSafefive");
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 7.5rem;
  height: 0.89rem;
  background-color: black;
  float: left;
  margin-left: -0.15rem;
  margin-top: -0.15rem;
}
.header .status {
  float: left;
  width: 7.5rem;
  /* height: 0.3rem; */
  margin-top: 0.15rem;
}
.header .jiao33 {
  float: left;
  margin-top: 0.25rem;
  margin-left: 0.4rem;
  width: 0.15rem;
  height: 0.3rem;
  position: absolute;
}
.header .t12 {
  margin-top: 0.2rem;
  margin-left: 2.97rem;
  font-size: 0.31rem;
  color: white;
}
.body {
  float: left;
  width: 7.5rem;
  height: 12.83rem;
  background-color: black;
  margin-top: -0.22rem;
}
.body .t22 {
  float: left;
  color: white;
  font-size: 0.46rem;
  margin-left: 2.57rem;
  margin-top: 2.03rem;
}
.body .t33 {
  float: left;
  color: #999999;
  font-size: 0.25rem;
  margin-left: 1.69rem;
  list-style: none;
  text-align: center;
  margin-top: 1.81rem;
}
.body .t33 li {
  height: 0.45rem;
  letter-spacing: 0.01rem;
  font-family: 黑体;
}
.body .so {
  width: 5.4rem;
  height: 0.75rem;
  font-size: 0.25rem;
  background-color: black;
  color: #999999;
  font-family: 黑体;
  border: none;
  border-bottom: 0.01rem solid #999999;
  margin-left: 1.05rem;
  text-align: center;
}
.body .btn11 {
  clear: both;
  float: left;
  width: 6.67rem;
  height: 0.98rem;
  background-color: #0091ff;
  border: #0091ff;
  margin-left: 0.42rem;
  margin-top: 1.52rem;
  color: white;
  font-size: 0.3rem;
}
</style>
