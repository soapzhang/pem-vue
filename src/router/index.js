import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import home from '@/components/home/home'
import adduser from '@/components/user/addUser'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/add',
      name: 'adduser',
      component: adduser
    },
    {
      path: '/',
      name: 'login',
      component: login
    },

  ]
})
