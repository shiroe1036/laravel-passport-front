import { createStore } from "vuex";

export const store = createStore({
    state(){
      return {
        accessToken: window.localStorage.getItem('accessToken')
      }
    },
    getters: {
      isLoggedIn(state){
        return !!state.accessToken;
      }
    },
    mutations: {
      setToken(state, token){
        state.accessToken = token
      }
    }
})