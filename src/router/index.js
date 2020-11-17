import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Index = () => import('components/index/Index')

export default new Router({
  routes: [
    {
          path: '/', 
          component: Index
    }
  ]
})
