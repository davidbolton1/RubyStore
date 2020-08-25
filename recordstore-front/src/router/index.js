import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn.vue'
import Signup from '@/components/Signup.vue'
import Records from '@/components/records/Records.vue'
import Artists from '@/components/artists/Artist.vue'

Vue.use(Router)

export default new Router({
  // Updates URL
  mode: 'history',
  routes: [
    {
      path: '/artist',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    },
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
