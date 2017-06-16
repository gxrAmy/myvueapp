<template>
  <div class="SingerShow">
    <div class="home_header">
      <mt-header fixed title="百度音乐">
        <mt-button icon="back" slot="left">
          <router-link to="/singer">返回</router-link>
        </mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <p class="divP1">&gt; {{ author }} &lt;</p>
      <img :src="authorImg" alt="">
    </div>
    <div class="musicShow">
      <ul
        v-infinite-scroll="loadMore()"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="8">
        <li v-for="item in authorMusic">
          <router-link :to="{ name:'MusicPlay', params:{id:item.song_id} }">
            <img :src="item.pic_small" alt="">
            <span>{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import jsonp from "jsonp";
import Vue from "vue";

export default {
  name: 'SingerShow',
  data () {
    return {
      author:"",
      singerUrl:"",
      authorImg:"",
      num:2,
      authorMusic:[]
    }
  },
  created(){
    this.singerUrl = window.location.hash.replace(/#\/SingerShow\//g,"");
    //console.log(this.playUrl);

    //播放歌曲的接口地址 http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=877578
    var singerGetUrl = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+this.singerUrl+"&limits=10&use_cluster=1&order=2";
    //console.log(playGetUrl);
    jsonp(singerGetUrl,null,(err,data) =>{
      if(err){
        console.log("啊呜，获取数据失败");
      }else{
        //console.log(data);
        this.authorMusic = data.songlist;
        this.author = data.songlist[0].author;
        this.authorImg = data.songlist[0].pic_big;
      }
    })
  },
  methods:{
    loadMore(){
      //console.log(this.authorMusic.length);
      this.loading = true;
      if(this.authorMusic.length <= 20){
        setTimeout(() => {
          this.singerUrl = window.location.hash.replace(/#\/SingerShow\//g,"");
          var singerGetUrl = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+this.singerUrl+"&limits="+(5*this.num)+"&use_cluster=1&order=2";
          //console.log(playGetUrl);
          jsonp(singerGetUrl,null,(err,data) =>{
            if(err){
              console.log("啊呜，获取数据失败");
            }else{
              this.authorMusic = data.songlist;
            }
          })
          this.num ++;
          this.loading = false;
        }, 2500);
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
.SingerShow a{color:#fff;}
.SingerShow .home_header p{height:1.32rem;font-size:0.66rem;font-weight:800;color:#aa0;line-height:1.32rem;background:#8EE5EE;}
.SingerShow .home_header img{width:80%;margin:0.2rem 0;border-radius:0.66rem;}
.SingerShow .musicShow ul{display:flex;flex-direction:column;width:100%;}
.SingerShow .musicShow ul li{display:flex;justify-content:flex-start;align-items:center;height:1.6rem;width:100%;margin:0.1rem 0;background:#63B8FF;}
.SingerShow .musicShow ul li a{display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%;}
.SingerShow .musicShow ul li img{width:1.2rem;height:1.2rem;border-radius:0.6rem;line-height:1.2rem;margin:0 0.8rem 0 0.3rem;}
.SingerShow .musicShow ul li span{font-size:0.5rem;color:#6B8E23;font-weight:800;}
</style>
