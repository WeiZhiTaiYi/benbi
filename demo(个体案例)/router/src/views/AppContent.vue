<template>
  <div id="app">
    <div id="quan">
      <ul>
        <li id="nerong"  class="wLi">
          <div id="leftContent">
            <div id="icon">
              <img id="iconpck" src="../assets/move@2x.png" alt>
            </div>
            <p id="subtitle">{{ subtitler }}</p>
            <p id="subtitleTow">{{ subtitleTow }}</p>
          </div>
          <div id="rightContent">
            <p id="name">{{ name }}</p>
          </div>
        </li>
        <li id="nerong"  class="wLi">
          <div id="leftContent">
            <div  id="icon2">
              <img id="iconpck2" src="../assets/Electricquantity@2x.png" alt>
            </div>
            <p id="subtitle">{{ subtitler2 }}</p>
            <p id="subtitleTow">{{ subtitleTow2 }}</p>
          </div>
          <div id="rightContent">
            <p id="name">{{ name }}</p>
          </div>
        </li>
        <li id="nerong"  class="wLi">
          <div id="leftContent">
            <div  id="icon">
              <img id="iconpck3" src="../assets/modify@2x.png" alt>
            </div>
            <p id="subtitle">{{ subtitler3}}</p>
            <p id="subtitleTow">{{ subtitleTow2 }}</p>
          </div>
          <div id="rightContent">
            <p id="name">{{ name }}</p>
          </div>
        </li>
        <li id="nerong"  class="wLi">
          <div id="leftContent">
            <div  id="icon2">
              <img id="iconpck2" src="../assets/Electricquantity@2x.png" alt>
            </div>
            <p id="subtitle">{{ subtitler4 }}</p>
            <p id="subtitleTow">{{ subtitleTow3 }}</p>
          </div>
          <div id="rightContent">
            <p id="name">{{ name }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data(){
      return{
        subtitler:'有人移动保险箱',
        subtitler3:'修改配置',
        subtitleTow:'2分钟前',
        subtitleTow2:'1天前',
        subtitleTow3:'18天前',
        name:'幻想乡',
        subtitler2:'保险箱电量低于20%',
        subtitler4:'保险箱电量低于30%'
      }
  }
};
</script>
<style scoped>
#quan {
  width: 7.5rem;
  height: 10.8rem;
  /* border: 1px solid red;  */
}
#nerong {
  width: 6.9rem;
  height: 1.15rem;
  border-bottom: 1px solid #e6e6e6;
  margin: auto;
  margin-top: 0.25rem;
}
#icon {
  background-color: red;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 5px;
  /* margin-top: 0.25rem; */
  float: left;
  position: relative;
}
#icon2{
  background-color: #f7ba11;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 5px;
  /* margin-top: 0.25rem; */
  float: left;
  position: relative;
}
#iconpck {
  width: 0.58rem;
  height: 0.50rem;
  /* float: left; */
  margin: 18%;
  position: absolute;
}
#iconpck2 {
  width: 0.32rem;
  height: 0.55rem;
  /* float: left; */
  margin-top:0.16rem;
  margin-left: 0.29rem;
  position: absolute;
}
#iconpck3 {
  width: 0.59rem;
  height: 0.54rem;
  /* float: left; */
  margin-top:0.18rem;
  margin-left: 0.18rem;
  position: absolute;
}
#subtitle {
  font-size: 0.3rem;
  float: left;
  margin-top: 0.08rem;
  margin-left: 0.19rem;
}
#subtitleTow {
  font-size: 0.25rem;
  color: #a1a1a1;
  /* float: left; */
  margin-top: 0.58rem;
  margin-left: 1.11rem;
}
#leftContent {
  width: 4.06rem;
  height: 1.06rem;
  float: left;
}
#rightContent {
  float: right;
}
#name {
  font-size: 0.29rem;
  color: #999999;
  margin-top: 0.36rem;
}
</style>

