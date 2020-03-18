import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入和配置mint-ui组件库
//1.完整引入mint-ui组件库
import MintUI  from "mint-ui"
//2.单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
//3.将mint-ui对象注册vue实例中
Vue.use(MintUI)
//5.引入第三方axios
 import axios from "axios"
//6.配置访问服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:5050/"
//7.引入qs
import qs from "qs"
//引入图标样式
import  './assets/icon/iconfont.css'
//引入和配置vant组件库
//1.完整引入vant组件库
import Vant from "vant"
import 'vant/lib/index.css';
Vue.use(Vant)
Vue.prototype.$axios=axios
Vue.prototype.$qs=qs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
