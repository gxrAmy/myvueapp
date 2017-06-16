<template>
  <div class="login">
    <div class="header">
      <mt-header fixed title="登录">
        <mt-button icon="back" slot="left">
          <router-link to="/user">返回</router-link>
        </mt-button>
        <mt-button slot="right">
          <router-link to="/register">注册</router-link>
        </mt-button>
      </mt-header>
    </div>
    <div class="loginShow">
      <h2>登录</h2>
      <div class="one">
        <input class="txt" type="text" placeholder=
        "请输入手机号" v-model="userName">
      </div>
      <div class="two">
        <input class="psw" type="password" placeholder=
        "请输入密码" v-model="passWord">
      </div>
      <h3 v-if="flag">您输入的帐号或密码有误，请检查！</h3>
      <h4 v-if="toflag">还账号未注册，请您先注册！</h4>
      <p class="three" @click="goLogin">
        <mt-button type="primary">登录</mt-button>
      </p>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  name: 'login',
  data () {
    return {
      flag: false,
      toflag: false,
      userName: "",
      passWord: ""
    }
  },
  created(){
    
  },
  methods:{
    goLogin(){
      //console.log(localStorage.userRegister);
      if(localStorage.userRegister){
        //console.log(this.password);
        var userObj = JSON.parse(localStorage.userRegister);
        //console.log(userObj);
        var username = userObj.userName;
        var password = userObj.passWord;
        //console.log(username);
        if(username == this.userName && password == this.passWord){
          this.flag = false;
          localStorage.userLogin = '{"userName":"' + this.userName + '","passWord":"' + this.passWord + '"}';
          console.log("登陆成功");
          MessageBox('恭喜', '登录成功')
          location.href = "/#/user";
        }else{
          this.flag = true;
        }
      }else if(this.userName != ""){
        this.toflag = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul,li {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  color: #42b983;
}
.login a{color:#fff;}
.loginShow h2{height:1.6rem;font-size:0.9rem;color:#6959CD;line-height:2rem;}
.loginShow div{display:flex;flex-direction:column;align-items:center;margin:0.6rem 0;}
.loginShow div input{display:inline-block;width:80%;height:0.6rem;border-radius:0.2rem;border:0;outline:none;border:0.05rem solid #66CD00;padding:0 0.16rem;}
.loginShow h3{width:94%;font-size:0.3rem;color:#d00;}
.loginShow .three button{width:80%;border-radius:0.2rem;}
.loginShow h4{width:94%;font-size:0.3rem;color:#d00;}
</style>
