import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "bootstrap/dist/css/bootstrap.min.css"

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

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
