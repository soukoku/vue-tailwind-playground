import Vue from 'vue'
import found from '@/components'

// register globally all TW components
Object.keys(found).forEach(name => {
  Vue.component(
    name,
    found[name]
  )
})