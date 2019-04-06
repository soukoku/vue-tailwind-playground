import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [];

// find all pages
const requireComponent = require.context(
  './pages',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)
  const component = componentConfig.default || componentConfig

  const nameOnly = fileName
  .split('/')
  .pop()
  .replace(/\.\w+$/, '')
  
  if(nameOnly==='Index'){
    // special
    routes.unshift({ name: 'Home', path: '/', component: component })
  }else{
    routes.push({name: nameOnly, path:`/${nameOnly}`, component: component})
  }
})


export default new VueRouter({
  routes: routes
})