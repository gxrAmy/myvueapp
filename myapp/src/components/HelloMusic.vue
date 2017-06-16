<template>
<div>
  <div class="home_header">
    <mt-header fixed title="百度音乐">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
  <div class="home_swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../static/images/swiper1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../static/images/swiper2.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../static/images/swiper3.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../static/images/swiper4.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <div class="home_tuijian">
    <h2>今日推荐</h2>
    <ul>
      <li v-for="tjitem in arrTuijian">
        <router-link :to="{ name:'MusicPlay', params:{id:tjitem.song_id} }">
          <img :src="tjitem.pic_big" alt="">
        </router-link>
        <p> {{ tjitem.title }} </p>
      </li>
    </ul>
  </div>
  <div class="home_regeTab">
    <h3>开心一曲</h3>
    <mt-navbar v-model="regeList">
      <mt-tab-item id="1">热歌</mt-tab-item>
      <mt-tab-item id="2">欧美</mt-tab-item>
      <mt-tab-item id="3">经典</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="regeList">
      <mt-tab-container-item id="1">
        <ul
          v-infinite-scroll="loadMore()"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <li v-for="item in regeListList">
            <router-link :to="{ name:'MusicPlay', params:{id:item.song_id} }">
              <img :src="item.pic_small" alt="">
              <span>{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul
          v-infinite-scroll="loadMore2"
          infinite-scroll-disabled="loading2"
          infinite-scroll-distance="10">
          <li v-for="item in oumeiList">
            <router-link :to="{ name:'MusicPlay', params:{id:item.song_id} }">
              <img :src="item.pic_small" alt="">
              <span>{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <ul
          v-infinite-scroll="loadMore3"
          infinite-scroll-disabled="loading3"
          infinite-scroll-distance="10">
          <li v-for="item in jingdianList">
            <router-link :to="{ name:'MusicPlay', params:{id:item.song_id} }">
              <img :src="item.pic_small" alt="">
              <span>{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>

</div>
</template>

<script>
import jsonp from "jsonp";
import Vue from "vue";
import { InfiniteScroll } from 'mint-ui'

Vue.use(InfiniteScroll);

export default {
  name: 'HelloMusic',
  data () {
    return {
      arrTuijian: "",
      flag:true,
      regeList:1,
      loading:true,
      loading2:true,
      loading3:true,
      regeListList:[],
      oumeiList:[],
      jingdianList:[],
      num:3
    }
  },
  created(){
    //alert(1111111111);
    // 今日推荐接口地址： http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=6
    jsonp("http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=6",null,(err,data) =>{
      if(err){
        console.log("啊呜，获取数据失败");
      }else{
        //console.log(data.result.list instanceof Array);
        this.arrTuijian = data.result.list;
      }
      //console.log(this.arrTuijian);
    })

    // Vue.axios({
    //   method: "GET",
    //   baseURL: '/ting',
    //   url: "/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=6"
    // }).then((res) => {
    //   console.log(res.data);
    // })

    // var qs=require('qs');
    // var instance = Vue.axios.create({
    //     headers: {'content-type': 'application/x-www-form-urlencoded'}
    // });
    // instance.post('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=6', qs.stringify(params)).then((res) => {
    //   console.log(res);
    // });

    // Vue.axios.get("http//tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=6")
    // .then((res)=> {
    //   console.log(res)
    // })

    //热歌接口: http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=15&offset=0
    jsonp("http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=15&offset=0",null,(err,data) =>{
      if(err){
        console.log("啊呜，获取数据失败");
      }else{
        //console.log(data);
        this.regeListList = data.song_list;
        //console.log(this.regeListList);
      }
    })

    //欧美进去榜接口: http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=15&offset=0
    jsonp("http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=15&offset=0",null,(err,data) =>{
      if(err){
        console.log("啊呜，获取数据失败");
      }else{
        //console.log(data);
        this.oumeiList = data.song_list;
        //console.log(this.oumeiList);
      }
    })

    //经典老歌接口: http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=22&size=15&offset=0
    jsonp("http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=22&size=15&offset=0",null,(err,data) =>{
      if(err){
        console.log("啊呜，获取数据失败");
      }else{
        //console.log(data);
        this.jingdianList = data.song_list;
        //console.log(this.jingdianListList);
      }
    })

  },
  methods:{
    loadMore(){
      //alert(11111);
      //console.log(this.regeListList.length);
      this.loading = true;
      if(this.regeListList.length <= 12){
        setTimeout(() => {
            jsonp("http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size="+(5*this.num)+"&offset=0",null,(err,data) =>{
            if(err){
              console.log("啊呜，获取数据失败");
            }else{
              //console.log(data);
              this.regeListList = data.song_list;
              //console.log(this.regeListList);
            }
          })
          this.num ++;
          //console.log(this.num);
          this.loading = false;
        }, 2500);
      }
    },
    loadMore2(){
      //alert(11111);
      this.loading2 = true;
      // if(this.list.length <= 20){
      //   setTimeout(() => {
      //     let last = this.list[this.list.length - 1];
      //     for (let i = 1; i <= 5; i++) {
      //       this.list.push(last + i);
      //     }
      //     this.loading2 = false;
      //   }, 2500);
      // }
    },
    loadMore3(){
      //alert(11111);
      this.loading3 = true;
      // if(this.list.length <= 20){
      //   setTimeout(() => {
      //     let last = this.list[this.list.length - 1];
      //     for (let i = 1; i <= 5; i++) {
      //       this.list.push(last + i);
      //     }
      //     this.loading3 = false;
      //   }, 2500);
      // }
    }
  }
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  text-decoration: none;
  color: #42b983;
}
div .home_header{height:100%;}
div .home_swiper{height:32vh;margin-top:0;}
div .home_swiper img{height:100%;width:100%;}
div .home_tuijian{height:6rem;}
div .home_tuijian h2{font-size:0.3rem;height:0.8rem;line-height:0.8rem;text-align:left;color:#aa0;font-weight:800;text-indent:1em;}
div .home_tuijian ul{height:5.2rem;display:flex;justify-content:space-around;flex-wrap:wrap;}
div .home_tuijian ul li{width:30vw;height:2.4rem;margin:0.1rem 0;display:flex;flex-direction:column;justify-content:space-between;align-items:center;}
div .home_tuijian ul li a{height:2rem;}
div .home_tuijian ul li a img{width:90%;}
div .home_tuijian ul li p{width:95%;height:0.4rem;overflow:hidden;font-size:0.24rem;line-height:0.4rem;}
div .home_regeTab{min-height:5rem;_height:5rem;}
div .home_regeTab h3{height:1rem;font-size:0.48rem;color:#0d0;background:#fff;line-height:1rem;}
div .home_regeTab div a{background:#ccc;margin:0 0.1rem 0.1rem;color:#d00;}
div .home_regeTab ul{display:flex;flex-direction:column;width:100%;}
div .home_regeTab ul li{display:flex;justify-content:flex-start;align-items:center;height:1.6rem;width:100%;margin:0.1rem 0;}
div .home_regeTab ul li a{display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%;}
div .home_regeTab ul li img{width:1.2rem;height:1.2rem;border-radius:0.6rem;line-height:1.2rem;margin:0 0.4rem;}
div .home_regeTab ul li span{font-size:0.4rem;}
</style>
