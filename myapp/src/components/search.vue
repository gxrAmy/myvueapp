<template>
  <div class="helloSearch">
    <div class="header">
      <mt-header fixed title="搜索歌曲">
        <mt-button icon="back" slot="left">
          <router-link to="/">返回</router-link>
        </mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="searchList">
      这块用于搜索
    </div>
    <div class="searchShow">
      =========
      这块列几个歌曲标签
    </div>
    <div class="searchShow">
    ==========
      这块列几个歌曲标签
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
.helloSearch a{color:#fff;}
</style>
