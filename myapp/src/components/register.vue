<template>
  <div class="register">
    <div class="header">
      <mt-header fixed title="注册">
        <mt-button icon="back" slot="left">
          <router-link to="/user">返回</router-link>
        </mt-button>
        <mt-button slot="right">
          <router-link to="/login">登录</router-link>
        </mt-button>
      </mt-header>
    </div>
    <div class="registerShow">
      <h2>注册</h2>
      <div class="one">
        <input class="txt" type="text" placeholder=
        "请输入11位手机号" v-model="userName">
      </div>
      <div class="two">
        <input class="psw" type="password" placeholder=
        "请输入密码" v-model="passWord">
      </div>
      <h3 v-if="flag">注册信息填写有误！</h3>
      <p class="three" @click="toRegister">
        <mt-button type="primary">注册</mt-button>
      </p>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  name: 'register',
  data () {
    return {
      userName: "",
      passWord: "",
      flag: false
    }
  },
  created(){
    
  },
  methods:{
    toRegister(){
      if( /\d{11}/.test(this.userName) && /\w{6,16}/.test(this.passWord) ){
        this.flag = false;
        localStorage.userRegister = '{"userName":"' + this.userName + '","passWord":"' + this.passWord + '"}';
          MessageBox('恭喜', '注册成功');
          location.href = "/#/login";
      }else{
        this.flag = true;
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
.register a{color:#fff;}
.registerShow h2{height:1.6rem;font-size:0.9rem;color:#6959CD;line-height:2rem;}
.registerShow div{display:flex;flex-direction:column;align-items:center;margin:0.6rem 0;}
.registerShow div input{display:inline-block;width:80%;height:0.6rem;border-radius:0.2rem;border:0;outline:none;border:0.05rem solid #66CD00;padding:0 0.16rem;}
.registerShow h3{width:94%;font-size:0.3rem;color:#d00;}
.registerShow .three button{width:80%;border-radius:0.2rem;}
</style>
