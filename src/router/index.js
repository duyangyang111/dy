import Vue from 'vue'
import VueRouter from 'vue-router'
import Index  from '../components/index.vue'
import Login  from '../components/login/login.vue'
import Register from '../components/login/register.vue'
import Xieyi from '../components/login/xieyi.vue'
import Me  from '../components/me.vue'
import Forget from  '../components/login/forget.vue'
import Details from '../components/details.vue'
import Search  from  '../components/search.vue'
import Pdetails from  '../components/pdetails.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/pdetails/:id',
  component:Pdetails,
  props:true
},
  {path:'/search',
   component:Search
},
  {path:'/details/:pid',
   component:Details,
   props:true
},
  {path:'/forget',
   component:Forget
},
  {path:'/me',
   component:Me
},
  {path:'/xieyi',
   component:Xieyi
},
  {path:'/register',
   component:Register
},
  {path:'/login',
   component:Login
},
  {path:'/',
   component:Index
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
