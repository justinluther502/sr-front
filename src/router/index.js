import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard"
import UserProfile from "@/views/UserProfile"
import Rowers from "@/views/Rowers"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'User Profile',
    component: UserProfile
  },
  {
    path: '/rowers',
    name: 'Rowers',
    component: Rowers
  }
]

const router = new VueRouter({
  routes
})

export default router
