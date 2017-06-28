import Vue from 'vue'
import Router from 'vue-router'
import search from '@/page/search.vue'
import upload from '@/page/upload.vue'
import interview from '@/page/interview.vue'
import analysis from '@/page/analysis.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: search
    },
    {
      path: '/upload',
      component: upload
    },
    {
      path: '/interview',
      component: interview
    },
    {
      path: '/analysis',
      component: analysis
    }
  ]
})
