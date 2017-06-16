<template>
  <div class="helloUser">
    <div class="header">
      <mt-header fixed title="个人信息">
        <mt-button icon="back" slot="left">
          <router-link to="/">返回</router-link>
        </mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="xinxi" v-if="flag">
      <ul>
        <li>
          <span>欢迎您</span>
          <span>{{ userName }}</span>
        </li>
        <li class="xinxiUlli2">
          <img src="../../static/images/img1.png" alt="">
          <input type="file" value="选择头像图片">
        </li>
        <router-link to="/"><li>我的收藏</li></router-link>
        <router-link to="/search"><li>我的列表</li></router-link>
        <router-link to="/"><li>我的下载</li></router-link>
        <li class="tuichu" @click="tuichuLogin">退出登录</li>
      </ul>
    </div>
    <div class="gotoLogin" v-if="!flag">
      <router-link to="/login">
        <mt-button type="danger">请您先登录</mt-button>
      </router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      userName: "15832515739",
      flag:false
    }
  },
  created(){
    if(localStorage.userLogin){
      this.flag = true;
      var userObj = JSON.parse(localStorage.userLogin);
      //console.log(userObj);
      this.userName = userObj.userName;
    }else{
      this.flag = false;
    }
    console.log("created:  " + this.flag);
  },
  methods:{
    tuichuLogin(){
      this.flag = false;
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
.helloUser a{color:#fff;}
/* userXinxi */
.xinxi ul{display:flex;flex-direction:column;overflow-x:hidden;}
.xinxi ul li{display:flex;justify-content:space-between;align-items:center;height:1.2rem;padding:0 0.5rem;margin:0.2rem 0;font-size:0.5rem;background:#fff;}
.xinxi ul .xinxiUlli2{height:1.8rem;}
.xinxi ul .xinxiUlli2 img{width:1.2rem;border-radius:0.6rem;}
.xinxi ul .xinxiUlli2 input{width:3rem;}
.xinxi ul a li{color:#000;}
.xinxi ul .tuichu{background:#9E9E9E;color:#8B0000;}
/* gotoLogin */
.gotoLogin a{display:flex;justify-content:center;align-items:center;}
.gotoLogin a button{width:80%;height:0.9rem;margin-top:0.4rem;}
</style>
