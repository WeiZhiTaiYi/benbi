<template>
  <div id="app">
    <div id="header-Dateils">
      <div class="header-inner">
        <img :src="imgurlone" alt class="status-img">
      </div>
        <img :src="imgurltwo" alt class="icon-Dateils">
      <h6>{{strongbox}}</h6>
      <img :src="imgurlthree" alt class="icon-add">
    </div>
    <div id="conent-Dateils">
      <div id="footer-Dateils">
        <img src="./../assets/guanggao@3x.png" alt class="inner-add">
        <p>
          {{np}}
          <span class="text">{{Intelligence}}</span>
          {{strongbox}}
        </p>
        <h6 class="txt">
          {{msg}}
          <span class="inner-text">{{Love}}</span>
        </h6>
        <ul>
          <a href="#">
            <li class="round"></li>
          </a>
          <a href="#">
            <li class="radius"></li>
          </a>
          <a href="#">
            <li></li>
          </a>
        </ul>
      </div>
      <img :src="imgurl" alt class="safe">
      <h6>
        <span>{{msgone}}</span>
        {{strongbox}}
      </h6>
      <p>{{text}}</p>
      <a href="#" class="Dateils-text">
        <router-link :to="{name:'Appstringboxcomplete'}">
          <div class="text">{{txt}}</div>
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      imgurlone: require("./../assets/status.png"),
      imgurltwo: require("./../assets/Relation1.png"),
      imgurlthree: require("./../assets/add.png"),
      strongbox: "保险箱",

      imgurl: require("./../assets/safe@2x.png"),
      msgone: "N·B",
      strongbox: "保险箱",
      text: "最后一次位置：幻想乡",
      txt: "监听此保险箱",

      np: "牛批",
      Intelligence: "智能",
      strongbox: "保险箱",
      msg: "别说了",
      Love: "我爱了"
    };
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
}
#app {
  width: 7.5rem;
}
#header-Dateils {
  width: 7.5rem;
  height: 1.2rem;
  background-color: #17181a;
  float: left;
}
#header-Dateils .header-inner {
  background-color: #000;
  position: absolute;
  width: 7.5rem;
}
#header-Dateils .status-img {
  width: 7.29rem;
  height: 0.35rem;
  float: left;
  margin-left: 0.1rem;
}
.icon-Dateils {
  width: 0.6rem;
  float: left;
  margin-left: 0.25rem;
  margin-top: 0.5rem;
}
#header-Dateils h6 {
  color: #fff;
  font-size: 0.3rem;
  font-weight: 300;
  margin-left: 2.45rem;
  padding-top: 0.55rem;
  float: left;
}
.icon-add {
  float: left;
  width: 0.6rem;
  margin-left: 2.5rem;
  margin-top: 0.45rem;
}

#conent-Dateils {
  text-align: center;
}
#conent-Dateils .safe {
  width: 2.45rem;
  /* margin-left: 2.53rem; */
  margin-top: 0.8rem;
}
#conent-Dateils h6 {
  font-size: 0.37rem;
}
#conent-Dateils span {
  letter-spacing: 0.1rem;
}
#conent-Dateils p {
  font-size: 0.26rem;
  color: #999999;
  margin-top: 0.25rem;
}
.Dateils-text {
  text-align: center;
  display: inline-block;
  width: 6.66rem;
  height: 0.98rem;
  background-color: #0090ff;
  line-height: 0.98rem;
  margin-top: 1.7rem;
}
/* #conent-Dateils a {
        text-align: center;
        display: inline-block;
        width: 6.66rem;
        height: 0.98rem;
        background-color: #0090ff;
        line-height: 0.98rem;
        margin-top: 1.7rem;
    } */
#conent-Dateils .text {
  font-size: 0.34rem;
  color: #fff;
  list-style-type: none;
}

#footer-Dateils {
  width: 7.5rem;
  height: 3.75rem;
  background-color: #000;
  float: left;
  position: relative;
}
#footer-Dateils .inner-add {
  width: 7.5rem;
  height: 3.75rem;
}
#footer-Dateils p {
  position: absolute;
  left: 0.6rem;
  top: 0.7rem;
  color: #fff;
  font-size: 0.3rem;
  letter-spacing: 0.1rem;
}
#footer-Dateils .text {
  font-size: 0.4rem;
}
#footer-Dateils .txt {
  position: absolute;
  left: 0.6rem;
  top: 1.55rem;
  color: #fff;
  font-size: 0.3rem;
  font-weight: 300;
}
#footer-Dateils .inner-text {
  margin-left: 0.2rem;
}
#footer-Dateils ul {
  position: absolute;
  left: 3.34rem;
  top: 3.42rem;
}
#footer-Dateils ul li {
  width: 0.15rem;
  height: 0.15rem;
  background: rgba(255, 255, 255, 0.411);
  float: left;
  border-radius: 50%;
}
.footer-top ul li:hover {
  background-color: #0090ff;
}
#footer-Dateils .radius {
  margin: 0 0.18rem;
}
#footer-Dateils .round {
  background-color: #fff;
}
</style>
