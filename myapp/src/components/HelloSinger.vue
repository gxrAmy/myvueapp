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
    <div class="singerShow">
      这块是展示歌手的板块
    </div>
    <div class="singerList">
      ==========
      这块展示歌手分类列表
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
  margin: 0 10px;
}

a {
  color: #42b983;
}
.helloSinger a{color:#fff;}
</style>
