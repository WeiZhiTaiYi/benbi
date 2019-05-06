<template>
    <div id="app">
        <!-- <router-view/> -->
        <div id="header">
            <img :src="imgurl" alt="" class="inner-status">
            <img :src="imgurltwo" alt="" class="icon-String" @click="goTo">
            <h6>{{ msg }}</h6>
            <router-link  to='/AppDetails' exact >{{ text }}</router-link>
        </div>
        <div id="content">
            <img :src="imgurlthree" alt="" class="icon">
            <div class="text">{{ msgtwo }}</div>
            <div class="txt">{{ textthree }}</div>
        </div>

        <div id="footer">
            <dir class="footer-top">
                <p>{{msgthree}}</p>
            <a href="#">{{textthree}}</a>
            <ul>
                <li>
                   <a href="#"> 一级</a>
                </li>
                <li>
                   <a href="#">二级</a> 
                </li>
                <li>   
                   <a href="#">三级</a> 
                </li>
                <li>
                   <a href="#">四级</a> 
                </li>
            </ul>
            </dir>
        </div>
    </div>
</template>

<script>
export default {    
    name: "app",
    data(){
        return {
            msg: '智能保险箱',
            text: '详情',
            imgurl : require('../assets/status.png'),

            imgurltwo : require('../assets/Return@2x.png'),
            msgtwo: '最后一次位置：幻想乡',
            texttwo: '当前状态：打开',
            imgurlthree : require('../assets/icon.png'),

            msgthree: '灵敏度设置',
            textthree: '灵敏度介绍',
            safe : '保险箱',
            opendoor: '开门记录',
            Alarmrecord: '报警记录',
            Relation: '关联记录',
            urlone: require('../assets/fase2@2x.png'),
            urltwo: require('../assets/Opendoor1@3x.png'),
            urlthree: require('../assets/Callthepolice1@3x.png'),
            urlfore: require('../assets/Relation1@3x.png'),
        }
    },
    methods:{
        goTo(){
            this.$router.push({name:'AppDateils'})
            
        }
    }
}
</script>

<style scoped>

    *{
        padding: 0;
        margin: 0;
    }
    li {
        list-style-type: none;
    }
    #header {
        height: 1.28rem;
        width: 7.5rem;
        background-color: #0090ff;
        position: relative;
    }
    .inner-status {
        width: 7.25rem;
        margin-left: 0.1rem;
        margin-top: 0.07rem;
        /* float: left; */
        position: absolute;
    }
    .icon-String {
        position: absolute;
        width: 0.2rem;
        left: 0.3rem;
        top: 0.55rem;
    }
    #header h6 {
        position: absolute;
        font-size: 0.3rem;
        color: #fff;
        top:0.55rem;
        font-weight: 300;
        left: 3rem;
    }
    #header a {
        position: absolute;
        font-size: 0.3rem;
        color: #fff;
        top:0.55rem;
        font-weight: 300;
        right: 0.3rem;
        text-decoration: none;
    }
    #content{
        width: 7.5rem;
        height: 7.5rem;
        position: relative;
        background-color: #0090ff;
    }
    #content .icon {
        width: 6rem;
        position: absolute;
        top:0rem;
        left: 0.78rem;
    }
    #content .text {
        text-align: center;
        position: absolute;
        width: 3.75rem;
        border-top:1px solid #32a8ff;
        font-size: 0.3rem;
        bottom: 0rem;
        border-right:1px solid #32a8ff;
        line-height: 0.91rem;
        color: #fff;
    }
    #content .txt {
        text-align: center;
        position: absolute;
        width: 3.75rem;
        border-top:1px solid #32a8ff;
        font-size: 0.3rem;
        bottom: 0rem;
        border-right:1px solid #32a8ff;
        line-height: 0.91rem;
        right: 0px;
        color: #fff;
    }
    #footer {
        height: 4.35rem;
        width: 7.5rem;
        overflow: hidden;
    }
    .footer-top {
        padding: 0.95rem 0.25rem 0;
    }
    .footer-top p {
        font-size: 0.28rem;
        color: #666666;
        float: left;
    }
    .footer-top a {
        font-size: 0.28rem;
        float:right;
        color: #0092fc;
        list-style-type: none;
    }
    .footer-top ul{
        clear: both;
        text-align: center;
    }
    .footer-top ul li{
        text-align: center;
        font-size: 0.3rem;
        float: left;
        width: 1.73rem;
        height: 0.5rem;
        background-color: #e0e4e7;
        margin-right: 0.02rem;
        margin-top: 0.15rem;
    }
    .footer-top ul li:hover{
        background-color: #0092fc;
    }
    .footer-top ul li a{
        margin-right: 0.55rem;
        color: #666666;       
        margin-top: 0.6rem; 
        list-style-type: none;
        text-decoration: none;
    }
    #footer-inner {
        width: 7.5rem;
        height: 1.3rem;
        border-top:1px solid #ccc;
        clear: both;
        margin-top: 1.75rem;
    }
    #footer-inner ul {
        width: 7.5rem;
        height: 1.3rem;
        text-align: center;
    }
    #footer-inner ul li {
        width: 1.83rem;
        height: 1.3rem;
        /* border:1px solid red; */
        text-align: center;
        position: relative;
        float: left;
    }
    #footer-inner ul li img{
        position: absolute;
        left: 0;
        top: 0;
        margin-left: 0.7rem;
        margin-top: 0.1rem;
        width: 0.53rem;
    }
    #footer-inner ul li p{
        font-size: 0.28rem;
        margin-top: 0.75rem;;
    }
    #footer-inner ul li .text{
        color: #0090ff;
    }
    #footer .image {
        margin-top: 0.15em;
    }
</style>
