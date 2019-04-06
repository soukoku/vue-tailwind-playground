import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import '@/registerTW'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: 'Index', path: '/', component: () => import('@/pages/Index.vue') },
    {
      name: 'Alert',
      path: '/alert',
      component: () => import('@/pages/Alert.vue')
    },
    {
      name: 'Busy',
      path: '/busy',
      component: () => import('@/pages/Busy.vue')
    },
    {
      name: 'Button',
      path: '/button',
      component: () => import('@/pages/Button.vue')
    },
    {
      name: 'Input',
      path: '/input',
      component: () => import('@/pages/Input.vue')
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
