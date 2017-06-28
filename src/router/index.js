import Vue from 'vue'
import Router from 'vue-router'
import search from '@/page/search.vue'
import upload from '@/page/upload.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: search
    },
    {
      path: '/upload',
      name: 'Upload',
      component: upload
    }
  ]
})
