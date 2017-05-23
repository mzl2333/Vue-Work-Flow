import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '../page/index.vue'
import content from '../page/content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'Index',
      component: index
    },
    {
      path: '/content',
      name: 'Content',
      component: content
    }
  ]
})
