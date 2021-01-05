import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

if (document.documentElement.clientWidth > 500) {
  document.documentElement.style.fontSize = '100px'
} else {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 5 + 'px'
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
