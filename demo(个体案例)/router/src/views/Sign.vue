<template>
  <div id="Sign">
    <img :src="jpg" class="jpg">
    <img :src="ico_png1" class="ico">
    <div class="user-registration">
      <div class="user">
        <span>
          <strong>{{user}}</strong>
        </span>
        <input type="text" placeholder="请输入用户名" class="user-name">
      </div>
      <div class="password-box">
        <span>
          <strong>{{password_box}}</strong>
        </span>
        <input type="password" placeholder="请输入密码" class="password">
      </div>
    </div>
    <router-link :to="{name:'addSafefive'}">   
      <button class="sign-in"> <span>{{sign_in}}</span> </button>
    </router-link>
    <router-link :to="{name:'appRegister'}"> 
      <span class="register">{{register}}</span>
    </router-link>
    <span class="forget">{{forget}}</span>
  </div>
</template>


<script>
import { fontsizeset } from "./../fontsizeset.js";

export default {
  name: "Sign",
  data() {
    return {
      jpg: require("../assets/状态栏.jpg"),
      ico_png1: require("../assets/ico.png"),
      user: "用户名",
      password_box: "密码",
      sign_in: "登录",
      register: "注册用户",
      forget: "忘记密码"
    };
  }
  // methods:{
  //   registerUser(){
  //     this.$router.push({name:'appRegisterLink'})
  //   }
  // }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* #hedaer {
  width: 7.5rem;
  height: 0.4rem;
  float: left;
}
#header img {
  float: left;
  width: 7.5rem;
} */
.jpg {
  float: left;
  width: 7.5rem;
}
.ico {
  float: left;
  height: 1.85rem;
  margin-left: 2.86rem;
  margin-top: 1.05rem;
}
.user-registration {
  float: left;
  width: 7.5rem;
  height: 1.82rem;
  border-top: 0.01rem solid #e5e5e5;
  border-bottom: 0.01rem solid #e5e5e5;
  margin-top: 1.06rem;
}
.user {
  float: left;
  width: 7.5rem;
  height: 0.9rem;
  border-bottom: 0.01rem solid #e5e5e5;
}
.user span {
  float: left;
  font-size: 0.26rem;
  margin-left: 0.46rem;
  margin-top: 0.25rem;
}
.user-name {
  float: left;
  width: 5.98rem;
  height: 0.86rem;
  border: 0;
  margin-left: 0.2rem;
}
.password-box {
  float: left;
  width: 7.5rem;
  height: 0.9rem;
}
.password-box span {
  float: left;
  font-size: 0.26rem;
  margin-left: 0.46rem;
  margin-top: 0.25rem;
}
.password {
  float: left;
  width: 5.98rem;
  height: 0.86rem;
  border: 0;
  margin-left: 0.45rem;
}
.sign-in {
  float: left;
  width: 6.85rem;
  height: 0.99rem;
  background-color: #0090ff;
  border: 0;
  color: #ffffff;
  margin-top: 0.61rem;
  margin-left: 0.3rem;
}
.register {
  float: left;
  font-size: 0.3rem;
  color: #808080;
  margin-top: 0.52rem;
  margin-left: 0.3rem;
}
.forget {
  float: right;
  font-size: 0.3rem;
  color: #808080;
  margin-top: 0.52rem;
  margin-right: -0.65rem;
}
</style>
