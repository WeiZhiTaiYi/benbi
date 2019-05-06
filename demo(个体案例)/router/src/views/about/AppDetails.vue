<template>
    <div id="app">
        <div class="header">
            <div class="header_top">
                <img :src="imgurl" alt="" class="icon">
            </div>
            <div class="header_botton">
                <img :src="imgicon" alt="" @click="goTo">
                <span>{{ msg }}</span>
            </div>
        </div>
        <div class="content">
            <ul class="content-top">
                <li>
                    <span class="text"> {{text}} </span>
                    <span class="txt"> {{txt}} </span>
                    <img :src="img" alt="">
                </li>
                <li class="li_bottom">
                    <span class="text"> {{textTwo}} </span>
                    <span class="txt"> {{txtTwo}} </span>
                </li>
            </ul>
            <ul class="content-bottom">
                <li class="content_li">
                    <span class="left">{{textThree}}</span>
                    <span class="right"> {{txtThree}} </span>
                </li>
                <li>
                    <span class="left">{{textFore}}</span>
                    <span class="right"> {{txtFore}} </span>
                </li>
                <li>
                    <span class="left">{{textFive}}</span>
                    <span class="right"> {{txtFive}} </span>
                </li>
                <li>
                    <span class="left">{{textSix}}</span>
                    <span class="right"> {{txtSix}} </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data(){
        return {
            imgurl:require('../../assets/状态栏@3x.png'),
            imgicon:require('../../assets/Return@2x.png'),
            msg:'保险箱详情',
            text:'保险箱详情',
            txt:'牛批保险箱',
            img : require('../../assets/3340e4519d6a2e35384d403aae06a27.png'),
            textTwo:'品牌',
            txtTwo: '三星',
            textThree:'序列号',
            txtThree: 'gfrgr44fdfd5fd',
            textFore: '设备IP',
            txtFore: '192.168.1.1',
            textFive: '固件版本',
            txtFive: 'V2.01245',
            textSix: '连接状态',
            txtSix : '已连接'
        }
    },
    methods:{
        goTo(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
#app{
    position: absolute;
    z-index: 9999;
}
li {
    list-style-type: none;
}
body {
    padding: 0;
    margin: 0;
}
*{
    padding: 0;
    margin: 0;
}
.header {
    width: 7.8rem;
    height: 1.25rem;
    background-color: #17181a;
    position: relative;
    top:-0.15rem;
    left:-0.15rem   ;
}
.header .header_top {
    width: 7.75rem;
    height: 0.4rem;
    background-color: #000;
    position: absolute; 
    top:0.2rem;
    left:0;
}
.header .header_botton {
    height: 0.85rem;
    width: 7.8rem;
    position: absolute;
    left:0;
    top:0.5rem;
}
.header .icon {
    width: 7.3rem;
    position: absolute;
    /* top:0.1rem; */
    left:0.3rem;
}
.header_botton img {
    width: 0.2rem;
    position: absolute;
    top:0.2rem;
    left:0.3rem;
}
.header_botton span {
    font-size: 0.3rem;
    position: absolute;
    color: #fff;
    left:3.2rem;
    top:0.2rem;
}
.content {
    width: 7.8rem;
    height: 12.45rem;
    background-color: #f2f2f2;
    position: relative;
    left:-0.15rem;
    top:-0.15rem;
}
.content .content-top {
    width: 7.75rem;
    height: 2.2rem;
    background-color: #fff;
}
.content .content-top li {
    width: 7.65rem;
    height: 1.1rem;
}
.content li span{
    font-size: 0.3rem;
    position: absolute;
}
.content li img {
    width: 0.2rem;
    position: absolute;
    top:0.35rem;
    left:7.05rem;
}
.content .li_bottom {
    border-top:1px solid #e6e6e6;
    position: relative;
}
.content .text {
    position: absolute;
    top:0.35rem;
    left:0.3rem;
}
.content .txt {
    position: absolute;
    top:0.35rem;
    left:5.25rem;
}
.content .li_bottom .text {
    position: absolute;
    top:0.35rem;
    left:0.3rem;
}
.content .li_bottom .txt {
    left:6.65rem
}
.content .content-bottom {
    width: 7.65rem;
    height: 4.45rem;
    background-color: #fff;
    margin-top: 0.3rem;
}
.content .content-bottom li{
    height: 1.1rem;
    width: 7.65rem;
    background-color: #fff;
    border-top:1px solid #e6e6e6;
    font-size: 0.3rem;
}
.content .content-bottom .left {
    padding-top:0.35rem;
    float: left;
    margin-left: 0.3rem;
}
.content .content-bottom .right {
    /* float:right; */
    padding-top:0.35rem;
    margin-right: 0.3rem;
    position: absolute;
    right:0;
}
</style>