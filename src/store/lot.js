import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const state = () => ({
    lot: [],
    auth: {},

});


const getters = {
    getLot(state) {

        return state.lot;
    },
    getAuth(state) {

        return state.auth;
    }
}

const mutations = {
    setLot(state, payload) {

        state.lot = payload;

    }, setAuth(state, payload) {
        state.auth = payload;
    }

}

const actions = {
    async fetchLot({ commit }) {

        let res = await axios.get(`${process.env.VUE_APP_API_URL}/alllot.php`);
        commit('setLot', res.data.Lot);

    },




    async Lotregistration({ commit }, payload) {
        console.log("lotsadasd");
        let res = await axios.post(`${process.env.VUE_APP_API_URL}/block.php`, payload);
        // localStorage.setItem('auth', JSON.stringify(res.data.user));
        // commit('setAuth', res.data.user[0]);


    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}