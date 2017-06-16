<template>
  <div class="helloSinger">
    <div class="header">
      <mt-header fixed title="歌手信息">
        <mt-button icon="back" slot="left">
          <router-link to="/">返回</router-link>
        </mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="singerss">
      <h2>推荐歌手</h2>
      <ul>
        <li v-for="item in singerList">
          <router-link :to="{ name:'SingerShow', params:{id:item.ting_uid} }">
            <img :src="item.avatar_s180" alt="">
          </router-link>
          <p> {{ item.name }} </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import jsonp from "jsonp";
import Vue from "vue";

export default {
  name: 'HelloSinger',
  data () {
    return {
      singerList:[] 
    }
  },
  created(){
    //alert(1111111111);
    // 搜索歌手接口地址： http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=877578
    Vue.axios.get("../../static/singerList.json").then((res)=> {
        //console.log(res.data);
        this.singerList = res.data;
        //console.log(this.singerShow);
      })
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul,li{
  list-style: none;
  padding: 0;
}

a {
  text-decoration:none;
  color: #42b983;
}
.helloSinger a{color:#fff;}
.singerss h2{height:1.4rem;font-size:0.7rem;font-weight:800;line-height:1.4rem;background:#87CEFF;color:#666;}
.singerss ul{display:flex;flex-wrap:wrap;justify-content:space-around;}
.singerss ul li{width:43%;margin:0.2rem 0;}
.singerss ul li img{width:100%;border-radius:0.6rem;}
.singerss ul li p{font-size:0.4rem;}
</style>
