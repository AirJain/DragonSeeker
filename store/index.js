import Vue from 'vue'
import Vuex from 'vuex'
import web3ModalStore from "@/store/modules/web3Modal";
import predictionStore from "@/store/modules/prediction";
import userStore from "@/store/modules/user";

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        web3Modal: web3ModalStore,
        prediction: predictionStore,
        user: userStore
    }
})
export default store
