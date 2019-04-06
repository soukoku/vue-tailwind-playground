import Vue from 'vue'
import router from './router'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import '@/registerTW'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
