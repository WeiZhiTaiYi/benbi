<template>
  <div id="app">
    <router-view/>
    <div id="nav">
        <div id="whole">
          <ul class="list">
            <li id="special" @click="Coffer">
              <router-link id="OpeningRecord" to="/AppStringbox">
                <img id="safepic" :src="CofferPic" alt>
                <p :style="[safetext1]">{{ CofferText }}</p>
              </router-link>
            </li>
            <li @click="Opening">
              <router-link id="OpeningRecord" to="/App1">
                <img id="safepic" :src="OpeningPic" alt>
                <p :style="[safetext2]">{{ OpeningText }}</p>
              </router-link>
            </li>
            <li @click="Log">
              <router-link id="OpeningRecord" to="/Appzt">
                <img id="safepic" :src="LogPic" alt>
                <p :style="safetext3">{{ LogText }}</p>
              </router-link>
            </li>
            <li @click="Ass">
              <router-link id="OpeningRecord" to="/RelevantWhole">
                <img id="safepic" :src="AssociatedPic" alt>
                <p :style="safetext4">{{ AssociatedUsers }}</p>
              </router-link>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import { fontsizeset } from "./fontsizeset.js";
export default {
  name: "app",
  data() {
    return {
      CofferText: "保险箱",
      OpeningText: "开门记录",
      LogText: "报警记录",
      AssociatedUsers: "关联用户",
      safetext1: {
        "font-size": "0.26rem",
        float: "left",
        "margin-left": "0.1rem",
        color: "#8c8c8c"
      },
      safetext2: { "font-size": "0.26rem", float: "left" ,color: "#8c8c8c" },
      safetext3: { "font-size": "0.26rem", float: "left" ,color: "#8c8c8c"},
      safetext4: { "font-size": "0.26rem", float: "left" ,color: "#8c8c8c"},
      CofferPic: require("../assets/fase1@2x.png"),
      OpeningPic: require('../assets/Opendoor1@3x.png'),
      LogPic: require('../assets/Callthepolice1@2x.png'),
      AssociatedPic: require('../assets/Relation1@2x.png')
    };
  },
  methods: {
    Coffer() {
      this.CofferPic = require("../assets/fase2@2x.png"),
      this.OpeningPic = require('../assets/Opendoor1@3x.png'),
      this.LogPic = require('../assets/Callthepolice1@2x.png'),
      this.AssociatedPic = require('../assets/Relation1@2x.png'),
      this.safetext1 = {
        "font-size": "0.26rem",
        float: "left",
        "margin-left": "0.1rem",
        color: "#0090ff"
      };
      this.safetext2 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
      this.safetext3 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
      this.safetext4 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
    },
    Opening(){
      this.CofferPic = require("../assets/fase1@2x.png"),
      this.OpeningPic = require('../assets/Opendoor2@2x.png'),
      this.LogPic = require('../assets/Callthepolice1@2x.png'),
      this.AssociatedPic = require('../assets/Relation1@2x.png'),
      this.safetext1 = {
        "font-size": "0.26rem",
        float: "left",
        "margin-left": "0.1rem",
        color: "#8c8c8c"
      };
      this.safetext2 = { "font-size": "0.26rem", float: "left",color: "#0090ff" };
      this.safetext3 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
      this.safetext4 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
    },
    Log(){
      this.CofferPic = require("../assets/fase1@2x.png"),
      this.OpeningPic = require('../assets/Opendoor1@3x.png'),
      this.LogPic = require('../assets/Callthepolice2@2x.png'),
      this.AssociatedPic = require('../assets/Relation1@2x.png'),
      this.safetext1 = {
        "font-size": "0.26rem",
        float: "left",
        "margin-left": "0.1rem",
        color: "#8c8c8c"
      };
      this.safetext2 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
      this.safetext3 = { "font-size": "0.26rem", float: "left",color: "#0090ff" };
      this.safetext4 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
    },
    Ass(){
      this.CofferPic = require("../assets/fase1@2x.png"),
      this.OpeningPic = require('../assets/Opendoor1@3x.png'),
      this.LogPic = require('../assets/Callthepolice1@2x.png'),
      this.AssociatedPic = require('../assets/Relation2@2x.png'),
      this.safetext1 = {
        "font-size": "0.26rem",
        float: "left",
        "margin-left": "0.1rem",
        color: "#8c8c8c"
      };
      this.safetext2 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
      this.safetext3 = { "font-size": "0.26rem", float: "left",color: "#8c8c8c" };
      this.safetext4 = { "font-size": "0.26rem", float: "left",color: "#0090ff" };
    }
  }
};
</script>

<style scoped>
#OpeningRecord {
  font-size: 0.2rem;
  margin-top: 0.09rem;
  /* margin-left: 2.3rem; */
  float: left;
  width: 1.04rem;
  /* border: 1px solid red; */
  height: 1rem;
}
#alarmLog {
  /* border: 1px solid red; */
  font-size: 0.2rem;
  margin-top: -1.1rem;
  margin-left: 4rem;
  float: left;
  width: 1rem;
  /* border: 1px solid red; */
  height: 1rem;
}
li {
  list-style: none;
}
#whole {
  width: 7.5rem;
  /* height: 14.3rem; */
  /* border: 1px solid red; */
  /* position: relative; */
}
.list {
  width: 7.5rem;
  border-top: 1px solid #808080;
  position: absolute;
  top: 12.35rem;
  left: 0;
  /* z-index: 999; */
}
.list li {
  float: left;
  margin-left: 0.65rem;
  list-style: none;
}

#safe {
  width: 1.04rem;
  height: 1rem;
  /* border: 1px solid red; */
  text-align: center;
  margin-top: 0.1rem;
}
#safepic {
  float: left;
  width: 0.52rem;
  height: 0.5rem;
  margin-left: 0.25rem;
}
#safetext {
  font-size: 0.26rem;
  float: left;
}
/* #specialLi{
    margin-left: 0px;
} */
#safetext1 {
  font-size: 0.26rem;
  float: left;
  margin-left: 0.1rem;
}
#safetextBlue {
  font-size: 0.26rem;
  float: left;
  color: #0191ff;
}
</style>
