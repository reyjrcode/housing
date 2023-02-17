import Vue from 'vue'
import Vuex from 'vuex'
import usersModule from './users';
import lotModule from './lot';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {

    users: usersModule,
    lot: lotModule,
  }
})
