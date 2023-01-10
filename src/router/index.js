import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import AdminNavbar from '../views/Navigation/AdminNavbar.vue'
import HomeShit from '../views/HomeView.vue'
import FormOne from '../views/Forms/FormOne.vue'
import LogIn from '../views/Forms/LoginPage.vue'
import Registration from '../views/Forms/Registration.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard
  }, {
    path: '/navigation',
    name: 'AdminNavbar',
    component: AdminNavbar
  }, {
    path: '/home',
    name: 'HomeShit',
    component: HomeShit
  }, {
    path: '/form-one',
    name: 'FormOne',
    component: FormOne
  },
  {
    path: '/register',
    name: 'Registration',
    component: Registration
  },
  //   {
  //     path: '/log-in',
  //     name: 'LogIn',
  //     component: LogIn
  //   },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
