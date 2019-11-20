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
             <button @click="GetToken">Get token</button>
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
import axios from "axios"

// @ is an alias to /src
export default {
  name: "login",
  components: {},
  beforeMount() {
    console.log(this.$auth);
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.getTokenWithPopup();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
    GetToken() {
      axios
        .get(
          "https://tomdatbenik.eu.auth0.com/authorize?response_type=code|token&client_id=YuP3gzjz4jk431LgbLB0r7YsoyCB1F6x&connection=CONNECTION&redirect_uri=http://localhost:8081&state=STATE"
        )
        .then(function(response) {
          // handle success
          console.log(response);
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
