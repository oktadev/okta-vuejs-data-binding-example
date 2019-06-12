<template>
  <div>
    <h1>Data Binding with Vue.js</h1>
    <h3>User Info:</h3>
    <div class="div-centered">
      <codemirror :value="userStr" :options="cmOptions"></codemirror>
    </div>
    <b-button v-if="!user.claims" @click="login" variant="primary" class="m-1">Login</b-button>
    <b-button v-if="user.claims" @click="logout" variant="danger" class="m-1">Logout</b-button>
  </div>
</template>

<script>
  import { codemirror } from 'vue-codemirror'
  import 'codemirror/lib/codemirror.css';

  import OktaAuth from '@okta/okta-auth-js';
  import { mapState } from 'vuex';

  const ISSUER = 'https://{yourOktaDomain}/oauth2/ausneyiq5fyDfRMvZ356';
  const CLIENT_ID = '{yourClientId}';
  const REDIRECT_URI = 'http://localhost:8080';
  var authClient;

  export default {
    name: 'Home',
    components: {
      codemirror
    },
    data() {
      return {
        cmOptions: {
          mode: 'javascript',
          lineNumbers: true,
          matchBrackets: true,
          readOnly: true
        }
      }
    },
    methods: {
      login() {
        authClient.token.getWithRedirect({
          responseType: 'id_token',
          scopes: ['openid', 'email', 'profile']
        })
      },
      logout() {
        window.location.href = ISSUER + '/v1/logout?id_token_hint=' + this.$store.state.idToken + '&post_logout_redirect_uri=' + REDIRECT_URI
      }
    },
    computed: {
      ...mapState(['user']),
      userStr() {
        return JSON.stringify(this.$store.state.user, null, '\t')
      }
    },
    created() {
      authClient = new OktaAuth({
        issuer: ISSUER,
        clientId: CLIENT_ID,
        redirectUri: REDIRECT_URI
      });
    },
    async mounted() {
      // check for tokens from redirect
      if (location.hash) {
        var tokenInfo = await authClient.token.parseFromUrl();

        this.$store.commit('setUser', {key: 'claims', value: tokenInfo.claims});
        this.$store.commit('setIdToken', tokenInfo.idToken);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .div-centered {
    text-align: left; 
    margin: auto; 
    width: 800px;
  }
</style>
