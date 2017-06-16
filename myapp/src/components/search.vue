<template>
  <div class="search">
    <div class="header">
      <mt-header fixed title="搜索歌曲">
        <mt-button icon="back" slot="left">
          <router-link to="/">返回</router-link>
        </mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="searchList">
      <mt-search v-model="value">
        <p class="searchListKong">&nbsp;</p>
        <p class="searchListBtn" @click="searchMusic">
          <mt-button type="primary">确定搜索</mt-button>
        </p>
        <ul>
          <li v-for="item in result">
            <router-link :to="{ name:'MusicPlay', params:{id:item.songid} }">
              <span>{{ item.songname }}</span>
              <span class="searchListSpan2"> {{ item.artistname }} </span>
            </router-link>
          </li>
        </ul>
      </mt-search>
    </div>
    <div class="searchShow">
      <router-link :to="{ name:'MusicPlay', params:{id:276867440} }">
        <mt-button type="primary">刚好遇见你</mt-button>
      </router-link>
      <router-link :to="{ name:'SingerShow', params:{id:2517} }">
        <mt-button type="default">薛之谦</mt-button>
      </router-link>
      <router-link :to="{ name:'MusicPlay', params:{id:274841326} }">
        <mt-button type="primary">成都</mt-button>
      </router-link>
      <router-link :to="{ name:'MusicPlay', params:{id:541721509} }">
        <mt-button type="primary">青春再见</mt-button>
      </router-link>
      <router-link :to="{ name:'SingerShow', params:{id:1077} }">
        <mt-button type="primary">陈奕迅</mt-button>
      </router-link>
      <router-link :to="{ name:'MusicPlay', params:{id:540489526} }">
        <mt-button type="primary">春风十里不如你</mt-button>
      </router-link>
      <router-link :to="{ name:'SingerShow', params:{id:1098} }">
        <mt-button type="default">五月天</mt-button>
      </router-link>
      <router-link :to="{ name:'MusicPlay', params:{id:541590912} }">
        <mt-button type="primary">遇到爱</mt-button>
      </router-link>
      <router-link :to="{ name:'SingerShow', params:{id:1095} }">
        <mt-button type="primary">梁静茹</mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import jsonp from "jsonp";
import Vue from "vue";

export default {
  name: 'search',
  data () {
    return {
      value: "",
      result: []
    }
  },
  created(){

  },
  methods:{
    searchMusic(){ 
      //歌曲搜索接口: http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=海阔天空
      //console.log(this.value);
      var searchUrl = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=" + this.value;
      jsonp(searchUrl,null,(err,data) =>{
        if(err){
          console.log("啊呜，获取数据失败");
        }else{
          //console.log(data);
          this.result = data.song;
        }
      })
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
  text-decoration:none;
}
.search{flex:1;overflow-x:hidden;overflow-y:auto;}
.search a{color:#fff;}
.searchList{width:96%;margin:0 auto;font-size:0.4rem;}
.searchList a{font-size:0.4rem;}
.searchList .mint-search{height:2rem;overflow:hidden;}
.searchList .searchListKong{height:1.04rem;}
.searchList .searchListBtn{width:95%;margin:0 auto;}
.searchList .searchListBtn button{width:100%;}
.searchList ul{display:flex;flex-direction:column;width:100%;height:66vh;overflow:auto;background:#eee;position:relative;left:0;top:0;z-index:100;}
.searchList ul li{display:flex;justify-content:flex-start;align-items:center;height:1.6rem;width:90%;margin:0.1rem 0;padding:0 5%;background:#ccc;}
.searchList ul li a{display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%;overflow:hidden;}
.searchList ul li span{font-size:0.4rem;color:#B22222;}
.searchList ul li .searchListSpan2{margin-left:0.6rem;color:#9400D3;}
</style>
