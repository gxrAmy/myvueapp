<template>
<div id="box">
  <div id="baiduMusic">
    <router-view>  </router-view>
  </div>
  <ul id="foottab">
    <router-link to="/">
      <li>
        <i class="iconfont icon-shouye"></i>
        <span>song</span>
      </li>
    </router-link>
    <router-link to="/singer">
      <li>
        <i class="iconfont icon-geshou"></i>
        <span>singer</span>
      </li>
    </router-link>
    <router-link to="/search">
      <li>
        <i class="iconfont icon-ge"></i>
        <span>search</span> 
      </li>
    </router-link>
    <router-link to="/user">
      <li>
        <i class="iconfont icon-geren"></i>
        <span>user</span>
      </li>
    </router-link>
  </ul>
</div>
</template>


<script>

export default {
  name: 'baiduMusic'

}

</script>

<style>
html,body,ul,ol,li,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,p,th,td,form,fieldset,legend,img,input,span,section,main,header,footer,article,aside,nav{margin:0;padding:0;}
a{text-decoration:none;}
ul,li{list-style:none;}
html,body{height:100%;overflow-x:hidden;}
html{font-size:15.625vw;}
#box{height:100%;display:flex;flex-direction:column;justify-content:space-between;background:#eee;}
#baiduMusic {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0.88rem;
  height: 0.88rem;
  flex:1;
  overflow:auto;
}
#baiduMusic h1{font-size:0.46rem;font-weight:800;}
#foottab{display:flex;height:0.98rem;justify-content:space-around;align-items:center;}
#foottab a{width:25%;height:0.98rem;}
#foottab a li{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:0.4rem;width:100%;height:100%;background:#4876FF;}
#foottab a li i{width:0.4rem;height:0.4rem;font-size:0.4rem;color:#fff;}
#foottab a li span{color:#fff;}

</style>