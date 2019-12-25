import Vue from 'vue'
import Router from 'vue-router'
// import Router from '../myrouter'
// import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '@/views'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
