// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Cell, Header, Navbar, Tabbar, TabItem, Swipe, SwipeItem, TabContainer, TabContainerItem, InfiniteScroll, Range, Search, MessageBox } from 'mint-ui'
import 'mint-ui/lib/style.css'
import BaiduMusic from './BaiduMusic'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "../static/iconfont/iconfont.css"

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Range.name, Range);
Vue.component(Search.name, Search);
Vue.use(VueAxios, axios);
Vue.use(InfiniteScroll);

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<BaiduMusic>  </BaiduMusic>`,
  components: { BaiduMusic }	//局部注册
})
