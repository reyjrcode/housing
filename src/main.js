import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "bootstrap/dist/css/bootstrap.min.css"

import './ChartsComponent'
import './HeaderList'
import './RightSideCards'
// import "./views/Header"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
