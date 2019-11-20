<template>
  <div class="row">
    <div class="col-6 offset-3">
      <div class="card rounded">
        <div class="card-header">
          <div class="card-title">
            <h4 class="display-4">IceWollowTowns</h4>
          </div>
        </div>
        <div class="card-body">
          <div v-if="!$auth.loading">
            <button @click="GetToken">{{token}}</button>
            <!-- show login when not authenticated -->
            <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
            <!-- show logout when authenticated -->
            <div v-if="$auth.isAuthenticated">
              <h2>{{ $auth.user.name }}</h2>
              <img :src="$auth.user.picture" />
              <button @click="logout">Log out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
export default {
  data() {
    return {
      token: null
    };
  },
  name: "login",
  components: {},
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
    async GetToken() {
      console.log(this.$auth.auth0Client.isAuthenticated());
      console.log(await this.$auth.auth0Client.getTokenSilently());
      axios
        .get("http://localhost:8080/friend")
        .then(function(response) {
          // handle success
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
    }
  }
};
</script>
