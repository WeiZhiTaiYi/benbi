<template>
    <div id="app">
        <div id="zheng">
            <img  id="statusBar" src="../assets/状态栏2.png" alt="">
            <img id="ReturnIcon" src="../assets/Return@2x.png" alt="" @click="goTo">
            <p id="Titie">报警记录</p>
        </div>
    </div>
</template>
<script>
// import {fontsizeset} from 'fontsizeset.js'
export default {
    name:'app',
    data(){
        return{}
    },
    methods:{
        goTo(){
            this.$router.push({name:'AppStringbox'})
        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
#zheng{
    width: 7.5rem;
    height: 1.28rem;
    border: 1px solid rgb(0, 0, 0);
    background-color: black;
}
#statusBar{
    width: 7.26rem;
    /* height: 0.23rem; */
    float: left;
    margin-left: 0.12rem;
    margin-top: 0.07rem;
}
#ReturnIcon{
    float: left;
    width: 0.20rem;
    /* height: 0.35rem; */
    margin-left: 0.25rem;
    margin-top: 0.34rem;
}
#Titie{
    font-size: 0.29rem;
    color: rgb(255, 255, 255);
    letter-spacing:0.04rem;
    margin-left: 3.12rem;
    margin-top: 0.68rem;
}
</style>

