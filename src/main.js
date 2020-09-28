import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

//全局事件总线，让组件能方便触发使用
// Vue.prototype.$globalEventBus = new Vue();

new Vue({
  //全局事件总线，不用另外创建vm实例，但要尽早挂载上去。
  beforeCreate(){
    Vue.prototype.$globalEventBus = this;
  },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
