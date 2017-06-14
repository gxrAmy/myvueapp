<template>
<div id="box">
  <div id="baiduMusic">
    <router-view>  </router-view>
  </div>
  <ul id="foottab">
    <li> <router-link to="/"> song </router-link> </li>
    <li> <router-link to="/singer"> singer </router-link> </li>
    <li> <router-link to="/search"> search </router-link> </li>
    <li> <router-link to="/user"> user </router-link> </li>
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
#box #baiduMusic h1{font-size:0.46rem;font-weight:800;}
#foottab{display:flex;height:0.98rem;justify-content:space-around;align-items:center;}
#foottab li{display:flex;flex-direction:column;justify-content:space-around;align-items:center;font-size:0.4rem;width:100%;height:100%;background:#4876FF;}
#foottab li a{color: #fff;}


</style>