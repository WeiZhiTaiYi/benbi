<template>
  <div id="app">
    <div id="quan">
      <div v-if="div" id="prompt">
        <span id="PromptText">{{ PromptText }}</span>
        <img  @click="Prompter" id="PromptPic" :src="PromptPic" alt="">
      </div>
      <ul>
        <li id="nerong"  v-for="item in list">
          <div id="leftContent">
            <div id="icon">
              <img id="iconpck" :src="item.img" >
            </div>
            <p id="subtitle">{{ item.subtitler }}</p>
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
        PromptText:'保险箱将按此顺序拨号，拖动可排序',
        PromptPic:require('../assets/Forknumber@2x.png'),
        div: true,
        list:[
          {img:require('../assets/Relation1@2x.png'),subtitler:'13149869439'},
          {img:require('../assets/Relation1@2x.png'),subtitler:'13149869439'},
          {img:require('../assets/Relation1@2x.png'),subtitler:'13149869439'}
        ]
      }
  },
  methods:{
    Prompter(){
        this.div = false
      }
    }
  }
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
  list-style: none
}
#icon {
  background-color:#b38eff;
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
  width: 0.66rem;
  height: 0.55rem;
  /* float: left; */
  margin-left: 0.13rem;
  margin-top: 0.17rem;
  position: absolute;
}

#subtitle {
  font-size: 0.23rem;
  float: left;
  margin-top: 0.33rem;
  margin-left: 0.12rem;
}
#prompt{
  width: 7.50rem;
  height: 0.82rem;
  background-color: #f7eabd;
  border: 1px solid #f7eabd;
}
#PromptText{
  font-size: 0.31rem;
  color: black;
  float: left;
  margin-top: 0.23rem;
  margin-left: 0.31rem;
}
#PromptPic{
  width: 0.46rem;
  float: left;
  margin-left: 1.34rem;
  margin-top: 0.18rem;
}
</style>


