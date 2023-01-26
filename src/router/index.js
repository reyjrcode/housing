import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/DashBoard.vue'
import AdminNavbar from '../views/Navigation/AdminNavbar.vue'
import HomeShit from '../views/HomeView.vue'
import FormOne from '../views/Forms/FormOne.vue'
import RegistrationPage from '../views/Forms/RegisterPage.vue'
import Loginpage from '../views/Forms/FinalLogin.vue'
import UpdateShit from '../views/crud/Update.vue'
import Views from '../views/crud/View.vue'
import ViewerShit from '../views/ViewerShit.vue'
import TotalAwards from '../views/reports/TotalAwards.vue'
import TotalApproved from '../views/reports/TotalApproved.vue'
import TotalProject from '../views/reports/TotalProject.vue'
import TotalBlocklisted from '../views/reports/TotalBlocklisted.vue'
import KilidsaSapa from '../views/dangerzone/KilidsaSapa.vue'
import KilidsaCreek from '../views/dangerzone/KilidsaCreek.vue'
import KilidsaEmburnal from '../views/dangerzone/KilidsaEmburnal.vue'
import WalayBalay from '../views/dangerzone/WalayBalay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loginpage',
    component: Loginpage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
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
    name: 'RegistrationPage',
    component: RegistrationPage
  },
  {
    path: '/update/:id?',
    name: 'UpdateShit',
    component: UpdateShit
  },
  {
    path: '/view/:id?',
    name: 'Views',
    component: Views
  },
  {
    path: '/viewshit',
    name: 'ViewerShit',
    component: ViewerShit
  },
  {
    path: '/total-awards',
    name: 'TotalAwards',
    component: TotalAwards
  },{
    path: '/total-approved',
    name: 'TotalApproved',
    component: TotalApproved
  },{
    path: '/total-project',
    name: 'TotalProject',
    component: TotalProject
  },{
    path: '/total-blocklisted',
    name: 'TotalBlocklisted',
    component: TotalBlocklisted
  },
  {
    path: '/kilidsasapa',
    name: 'KilidsaSapa',
    component: KilidsaSapa
  },
  {
    path: '/kilidsacreek',
    name: 'KilidsaCreek',
    component: KilidsaCreek
  },
  {
    path: '/kilidsaemburnal',
    name: 'KilidsaEmburnal',
    component: KilidsaEmburnal
  },
  {
    path: '/walaybalay',
    name: 'WalayBalay',
    component: WalayBalay
  },



]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {

  if (to.name == 'Dashboard' && localStorage.getItem('auth') == null)
    next({ name: 'Loginpage' });
  else if (localStorage.getItem('auth') != null && (to.name == 'RegistrationPage' || to.name == 'Loginpage'))
    next({ name: 'Dashboard' });
  else
    next();

});
export default router
