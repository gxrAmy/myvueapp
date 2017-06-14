<template>
<div>
  <div class="home_header">
    <mt-header fixed title="百度音乐">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
  <div class="home_swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../../static/images/swiper1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/swiper2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/swiper3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/swiper4.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
  <div class="home_tuijian">
    <h2>今日推荐</h2>

  </div>
  <div class="home_tuijian">
    <h3>开心一曲</h3>
    
  </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  color: #42b983;
}
div .home_header{height:100%;}
div .home_swiper{height:32vh;margin-top:0;}
div .home_swiper img{height:100%;width:100%;}



</style>
