import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from './http'
import qs from 'qs';
import Axios from 'axios'

Vue.prototype.$qs = qs;
Vue.prototype.$axios = Axios;

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant,http);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
