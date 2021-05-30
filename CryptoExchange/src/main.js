// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Header from './components/Header'
import Content from './components/ExchangeWindow'
import SucessWindow from './components/SuccessWindow'
import store from './store/index'
import router from './router/index'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('Content', Content)
Vue.component('SuccessWindow', SucessWindow)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  router
})
