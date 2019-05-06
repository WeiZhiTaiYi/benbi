<template>
  <div id="ad">
    <img :src="url" alt class="status_bar">
    <img :src="url1" alt class="tuq">
    <span class="Title">{{text}}</span>
    <span class="Explain">{{text1}}</span>
    <span id="num">{{count}}</span>
  </div>
</template>

<script>
export default {
  name: "ad",
  data() {
    return {
      url: require("../assets/状态栏.png"),
      url1: require("../assets/tuq.png"),
      text: "智能保险箱",
      text1: "有安全感，才能稳稳的幸福",
      count: "" // 倒计时
    };
  },
  created() {
    this.threeGo();
  },

  methods: {
    threeGo() {
      const TIME_COUNT = 3;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            // 跳转的页面写在此处
            this.$router.push({
              path: "/Sign"
            });
          }
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.status_bar {
  width: 7.5rem;
  position: absolute;
}
.tuq {
  width: 7.5rem;
  height: 13.34rem;
}
.Title {
  color: #ffffff;
  font-size: 0.4rem;
  position: absolute;
  left: 6.04rem;
  top: 1.1rem;
}
.Explain {
  color: #bfc0c5;
  font-size: 0.24rem;
  position: absolute;
  left: 5.49rem;
  top: 1.2rem;
  writing-mode: tb-rl;
}
</style>
