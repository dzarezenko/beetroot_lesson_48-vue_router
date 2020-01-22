import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../components/user/User.vue'
import UserDetails from '../components/user/UserDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
  {
    path: '/user/:id',
    name: 'userDetails',
    component: UserDetails,
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
