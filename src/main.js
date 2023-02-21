import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css"
import AOS from 'aos'
import 'aos/dist/aos.css'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import './ChartsComponent'



import './relocation/ButtomCards'
import './relocation/DangerZonelist'
import './relocation/HeaderList'
import './relocation/RightSideCards'
import './NavigationBar'




import './shelterassistancecomponent/ShelterHeader'
import './shelterassistancecomponent/ShelterAssistanceList'
import './shelterassistancecomponent/RightSideCards'
import './shelterassistancecomponent/SubTable'






import './TableBackenApi'



// import "./views/Header"
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
  router,
  store,
  vuetify,
  $,

created(){
  AOS.init();
},

  render: h => h(App),

}).$mount('#app')
