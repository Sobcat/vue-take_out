import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../views/MSite.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'MSite',
      component: MSite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: ()=> import('../views/Order.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
