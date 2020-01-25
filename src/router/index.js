import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../components/user/User.vue'
import UserDetails from '../components/user/UserDetails.vue'

import Header from "../components/Header";
import Footer from "../components/Footer";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      'header': Header,
      'footer': Footer,
    }
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
    children: [
      {
        path: '/user/:id',
        name: 'userDetails',
        component: UserDetails,
        props: (route) => {
          return {
            id: route.params.id,
            name: "Test",
          }
        },
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
