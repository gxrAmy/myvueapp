<template>
  <div id="baiduMusic">
    <router-view></router-view>

    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container4">
        <mt-cell v-for="n in 2" title="tab-container 4"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
<mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="" @click="chooseTab1">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="" @click="chooseTab2">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="" @click="chooseTab3">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="" @click="chooseTab4">
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
 
</template>

<script>
export default {
  name: 'baiduMusic',
  data(){
      return {
        selected:"tab",
        active:"tab-container1"
      }
    },
    methods:{
      chooseTab1(){
        //alert(111)
        this.active = "tab-container1"
      },
      chooseTab2(){
        this.active = "tab-container2"
      },
      chooseTab3(){
        this.active = "tab-container3"
      },
      chooseTab4(){
        this.active = "tab-container4"
      }
    }
}
</script>

<style>
#baiduMusic {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
