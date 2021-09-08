import Vue from 'vue'
import VueRouter from 'vue-router'
import CartIndex from '../views/CartIndex.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CartIndex',
    component: CartIndex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
