import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
    state: {
        isLogin: localStorage.getItem("isLogin")
    },
    mutations: {
        changeIsLoginStatus(state, isLogin) {
            state.isLogin = isLogin;
        }
    }
})

export default store