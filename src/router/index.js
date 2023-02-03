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
import KilidsaSapa from '../views/dangerzone/FloodProne.vue'
import KilidsaCreek from '../views/dangerzone/KilidsaCreek.vue'
import OtherDanger from '../views/dangerzone/OtherDanger.vue'
import NPCline from '../views/dangerzone/NPCline.vue'
import Inventory from '../views/actions/InventoryPage.vue'
import AddMaterials from '../views/Forms/AddMaterials.vue'
import ShelterAssistance from '../views/Forms/ShelterAssistance.vue'
import LocationShelterForm from '../views/Forms/LocationShelterForm.vue'
import LandSlide from '../views/dangerzone/LandSlide.vue'
import ToApproved from '../views/listing/ToApproved.vue'
// import MappingPage from '../views/map/MappingPage.vue'











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
  }, {
    path: '/total-approved',
    name: 'TotalApproved',
    component: TotalApproved
  }, {
    path: '/total-project',
    name: 'TotalProject',
    component: TotalProject
  }, {
    path: '/total-blocklisted',
    name: 'TotalBlocklisted',
    component: TotalBlocklisted
  },
  {
    path: '/floodprone',
    name: 'FloodProne',
    component: KilidsaSapa
  },
  {
    path: '/kilidsacreek',
    name: 'KilidsaCreek',
    component: KilidsaCreek
  },
  {
    path: '/other-danger',
    name: 'OtherDanger',
    component: OtherDanger
  },
  {
    path: '/npc-line',
    name: 'NPCline',
    component: NPCline
  }, {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  }, {
    path: '/add-materials',
    name: 'AddMaterials',
    component: AddMaterials
  },
  {
    path: '/shelter-assistance',
    name: 'ShelterAssistance',
    component: ShelterAssistance
  },
  {
    path: '/shelterlocation',
    name: 'LocationShelterForm',
    component: LocationShelterForm
  },
  {
    path: '/landslide-prone',
    name: 'LandSlide',
    component: LandSlide
  },

  {
    path: '/listing-list',
    name: 'ToApproved',
    component: ToApproved
  },
  // {
  //   path: '/mapping',
  //   name: 'MappingPage',
  //   component: MappingPage
  // },



  

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
