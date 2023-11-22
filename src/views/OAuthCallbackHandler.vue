<template>
    <div class="flex justify-center">
      <div role="alert" class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Logging you in...</span>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
  async mounted(){
    try {
      const server_auth_url = import.meta.env.VITE_APP_OAUTH_AUTH_SERVER
      const data_post = {
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_APP_OAUTH_CLIENT_ID,
        client_secret: import.meta.env.VITE_APP_OAUTH_CLIENT_SECRET,
        redirect_uri: import.meta.env.VITE_APP_OAUTH_CLIENT_REDIRECT,
        code: this.$route.query.code
      }
      const response = await axios.post(`${server_auth_url}/oauth/token`, data_post)
      window.localStorage.setItem('accessToken', response.data.access_token);
      window.localStorage.setItem('refresh_token', response.data.refresh_token);

      this.$router.push('/')
    } catch (error) {
      console.log(error)
      this.$router.push('/')
    }
  }
}
</script>