import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard"
import UserProfile from "@/views/UserProfile"
import Rowers from "@/views/Rowers"
import Hulls from "@/views/Hulls"
import Teams from "@/views/Teams"
import RowerDetail from "@/views/RowerDetail"
import HullDetail from "@/views/HullDetail"


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
    path: '/rowers/:id',
    name: 'Rower Detail',
    component: RowerDetail
  },
  {
    path: '/hulls',
    name: 'Racing Hulls',
    component: Hulls
  },
  {
    path: '/hulls/:id',
    name: 'Hull Detail',
    component: HullDetail
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
