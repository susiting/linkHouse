import Vue from 'vue'
import App from './App.vue'

//图标文件
import './assets/iconfont/iconfont.css';
//引进初始化文件
import './css/mobilebase.css'
//import './css/home.css'
//引进路由
import router from './js/router.js'
//import rem from './js/rem.js'
// vue文件自动去node_modules文件夹寻找
import VueRouter from 'vue-router'
// 配置每个实例对象可以使用vue

//json文件的配置
import axios from 'axios'
Vue.prototype.$http = axios

import VueAwesomeSwiper  from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//引进公共的css
import common from "./css/common.css";
import Mint from 'mint-ui';
//swiper
//import 'swiper/dist/css/swiper.min.css'
//import swiper from "swiper"

Vue.use(Mint);

Vue.use(VueRouter)

import 'mint-ui/lib/style.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
