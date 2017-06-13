// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Cell, Header, Navbar, Tabbar, TabItem, Swipe, SwipeItem, TabContainer, TabContainerItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import BaiduMusic from './BaiduMusic'
import router from './router'

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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<div>
  				<BaiduMusic>  </BaiduMusic>
  			</div>`,
  components: { BaiduMusic }
})
