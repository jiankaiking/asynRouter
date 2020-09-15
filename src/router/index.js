import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  { path: '/', redirect: '/home' },
  {
    path: '/404', name: '404',
    component: () => import('../components/404.vue')
  }
]
export const asynRouter = {
  'Home': {
    path: '/home',
    name: 'home',
    component: Home
  },
  'One': {
    path: '/one',
    name: 'One',
    component: () => import('../views/asynRouter/One.vue')
  },
  'Two': {
    path: '/two',
    name: 'Two',
    component: () => import('../views/asynRouter/Two.vue')
  },
  'Three': {
    path: '/three',
    name: 'Three',
    component: () => import('../views/asynRouter/Three.vue')
  }
}

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
