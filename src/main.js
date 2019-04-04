import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/css/tailwind.css'
import '@/registerbase'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
