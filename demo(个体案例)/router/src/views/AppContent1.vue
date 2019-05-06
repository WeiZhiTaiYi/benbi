<template>
  <div id="app">
    <div id="quan">
    <ul>
        <li id="nerong" v-for="item in list">
            <div id="leftContent">
                <div id="icon1">
                    <img id="icon1pck" src="../assets/lock@2x.png" alt="">
                </div>
                 <p id="subtitle" >{{ item.subtitler }}</p>
                 <p id="subtitleTow" >{{ item.subtitleTow }}</p>
            </div>
            <div id="rightContent">
                <p id="name">{{ item.name }}</p>
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
          list:[
              {subtitler:'开门',subtitleTow:'2分钟前',name:'幻想乡'},
              {subtitler:'开门',subtitleTow:'1天前',name:'幻想乡'},
              {subtitler:'开门',subtitleTow:'1天前',name:'幻想乡'},
              {subtitler:'开门',subtitleTow:'18天前',name:'幻想乡'},
          ]
      }
  }
};
</script>
<style scoped>
#quan {
  width: 7.5rem;
  height: 9.9rem;
  /* border: 1px solid red;  */
}
#nerong {
  width: 6.9rem;
  height: 1.15rem;
  border-bottom: 1px solid #e6e6e6;
  margin: auto;
  margin-top: 0.25rem;
}
#icon1 {
  background-color: #f7a41e;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 5px;
  /* margin-top: 0.25rem; */
  float: left;
}
#icon1pck {
  width: 0.62rem;
  height: 0.62rem;
  float: left;
  margin: 15%;
}
#subtitle {
  font-size: 0.3rem;
  float: left;
  margin-top: 0.08rem;
  margin-left: 0.19rem;
}
#subtitleTow{
    font-size: 0.25rem;
    color: #a1a1a1;
    float: left;
    margin-top:0.58rem;
    margin-left: -0.59rem;
}
#leftContent{
    width: 2.06rem;
    height: 1.06rem;
    float: left;
}
#rightContent{
    float: right;
}
#name{
    font-size: 0.29rem;
    color: #999999;
    margin-top: 0.36rem;
}
</style>


