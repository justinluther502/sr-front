import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard"
import UserProfile from "@/views/UserProfile"
import Rowers from "@/views/Rowers"
import Hulls from "@/views/Hulls"
import Teams from "@/views/Teams"


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
  },
  {
    path: '/hulls',
    name: 'Racing Hulls',
    component: Hulls
  },
  {
    path: '/crews',
    name: 'Seatraced Crews',
    component: Teams
  },
]

const router = new VueRouter({
  routes
})

export default router
