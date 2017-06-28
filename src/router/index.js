import Vue from 'vue'
import Router from 'vue-router'
import search from '@/page/search.vue'
import upload from '@/page/upload.vue'
import interview from '@/page/interview.vue'
import analysis from '@/page/analysis.vue'
import recommend from '@/page/recommend.vue'
import maintainJD from '@/page/maintainJD.vue'
import positionSetting from '@/page/positionSetting.vue'
import user from '@/page/userManage/user.vue'
import role from '@/page/userManage/role.vue'
import authority from '@/page/userManage/auth.vue'

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
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/maintainJD',
      component: maintainJD
    },
    {
      path: '/positionSetting',
      component: positionSetting
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/role',
      component: role
    },
    {
      path: '/authority',
      component: authority
    }
  ]
})
