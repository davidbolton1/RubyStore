import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn.vue'
//.vue for single file component
//import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  // Updates URL
  mode: 'history',
  routes: [
    {
     path: '/'
     name: 'Signin',
     component: Signin
    }
  ]
})
