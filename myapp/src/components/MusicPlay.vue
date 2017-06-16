<template>
  <div class="MusicPlay">
    <div class="home_header">
      <mt-header fixed title="百度音乐">
        <mt-button icon="back" slot="left">
          <router-link to="/">返回</router-link>
        </mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <p class="divP1">&gt;&nbsp;{{ biaoti }}&nbsp;&lt;</p>
      <img :src="musicImg" alt="">
    </div>
    <div class="musicShow">
      <p>
        <audio :src="playSrc" autoplay controls></audio>
        <!-- <p class="musicShowPP1">
          <mt-range v-model="rangeValue">
            <div slot="start">&nbsp;调节音量&nbsp;&nbsp;0</div>
            <div slot="end">100</div>
          </mt-range>
        </p> -->
      </p>
      <p>
        <!-- <p class="divP2">T_T 抱歉，暂时不能播放 T_T</p> -->
        <p>
          <a :href="tzHref">
            <mt-button type="primary" id="aBtn">点击跳转到播放</mt-button>
          </a>
        </p>
        <p>
          <a :href="musicDoload">
            <mt-button type="default" id="aBtn">点击下载歌曲</mt-button>
          </a>
        </p>
        <p>
          <a :href="lrclinkDoload">
            <mt-button type="default" id="aBtn">点击下载歌词</mt-button>
          </a>
        </p>
      </p>
    </div>
  </div>
</template>

<script>
import jsonp from "jsonp";
import Vue from "vue";

export default {
  name: 'user',
  data () {
    return {
      biaoti:"",
      playUrl:"111",
      playSrc:"",
      musicTitle:"",
      tzHref:"",
      musicImg:"",
      musicDoload:"",
      lrclinkDoload:"",
      playObj:"",
      rangeValue:50
    }
  },
  created(){
    this.playUrl = window.location.hash.replace(/#\/MusicPlay\//g,"");
    //console.log(this.playUrl);
    //播放歌曲的接口地址 http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=877578
    var playGetUrl = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=" + this.playUrl;
    //console.log(playGetUrl);
    jsonp(playGetUrl,null,(err,data) =>{
      if(err){
        console.log("啊呜，获取数据失败");
      }else{
        //console.log(data);
        this.playObj = data;
        //console.log(data.bitrate.file_link);
        this.playSrc = data.bitrate.show_link;
        this.musicTitle = data.songinfo.title;
        this.biaoti = data.songinfo.title;
        this.musicImg = data.songinfo.pic_radio;
        this.musicDoload = data.bitrate.file_link;
        this.lrclinkDoload = data.songinfo.lrclink;
        //console.log(this.musicDoload);
        this.tzHref = "http://music.baidu.com/search/" + this.musicTitle;
      }
      //console.log(this.arrTuijian);
    })
  },
  methods:{
    removeBtn(){
      //this.rangeValue = 60;
    }
  }
}
// window.onload = function(){
//   var divBtn = document.getElementsByClassName("mt-range-thumb")[0];
//   console.log(divBtn);
//   divBtn.onmousedown = function(){
//     divBtn.style.position = "absolute";
//     divBtn.onmousemove = function(){
//       removeBtn();
//     }
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  color: #42b983;
}
.MusicPlay a{color:#fff;}
.MusicPlay p{font-size:0.4rem;margin:0.16rem 0;}
.MusicPlay .home_header img{width:90%;border-radius:0.66rem;}
.MusicPlay .divP1{color:#990;font-size:0.66rem;font-weight:800;}
.MusicPlay .divP2{color:#d00;}
.MusicPlay button{width:80%;}
.musicShow{text-align:center;}
.musicShowPP1{width:90%;margin-left:5%;}
</style>
