import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn.vue'
import Signup from '@/components/Signup.vue'

Vue.use(Router)

export default new Router({
  // Updates URL
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
