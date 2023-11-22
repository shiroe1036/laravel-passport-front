
<template>
  <div id="app">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li v-if="isLoggedIn" >
            <button @click="logout" class="px-4 py-2 bg-red-500 text-white">Log out</button>
          </li>
          <li v-else>
            <button @click="redirect" class="px-4 py-2 bg-green-500 text-white">Log in</button>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<script>
import qs from 'qs'
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
export default{
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  created(){
    console.log("sd", import.meta.env, this.$store.getters.isLoggedIn)
  },
  methods: {
    redirect(){
      const queryString = {
        client_id: import.meta.env.VITE_APP_OAUTH_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_APP_OAUTH_CLIENT_REDIRECT,
        response_type: 'code',
        scope: '' 
      }
      window.location.href = `${import.meta.env.VITE_APP_OAUTH_AUTH_SERVER}/oauth/authorize?${qs.stringify(queryString)}`
    },
    logout(){
      // 
    }
  }
}
</script>