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
    async callApi() {
      var request = require("request");

      var options = {
        method: "GET",
        url: "http://localhost:8080/api/public",
        headers: {
          authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5rTkNRelU0UVRsQ016WTJSVFUzT1VOQ1FVUTRNREU0UmtVMU9FSTFSVEExTVVRNE5VUTBRUSJ9.eyJpc3MiOiJodHRwczovL2RlYXRocnVuLmF1dGgwLmNvbS8iLCJzdWIiOiJudzlLRVZUNFgwVTZtdGNsR0VZbVY5UFF5REl0WE03ZUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9JY2VXb2xsb3dUb3duc0FwaSIsImlhdCI6MTU3NDc3MjkyMywiZXhwIjoxNTc0ODU5MzIzLCJhenAiOiJudzlLRVZUNFgwVTZtdGNsR0VZbVY5UFF5REl0WE03ZSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.QRy4QQxWTUwQ7ukYsL7Ikn96qYAc2-UzkbgO8IDu8K78IDB344ch0M8jGT_YH8Yo8Y611ERmZ4CAkCqowNKwwbpH3b6h-fh2PcQGYFZPMSt18Grc51WV1E3hGjjwa4Hu6gqDEvtsNQBPmc1mcAq00kXbWGb9YBlAjsBwEdWmkY-0-GAdaknvFSdW-ohSN0kf3X3WRZwd_1imH8RzB5on8tVh65C79345gJE04JGGNPYFqKSuXWYOPtMCbR__GnuerD4L_1UghE-YNRE9NuzNewAUjNd5pm0XqD91nlDdKYT_Qe6aVNWZBsOianEBCtjAJWstZhLbTq097xNO6AX6GQ"
        }
      };

      request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      });
    },
    async GetToken() {
      console.log(this.$auth.auth0Client.isAuthenticated());
      console.log(await this.$auth.auth0Client.getTokenSilently());
      const token = await this.$auth.getTokenSilently();
      console.log(token)
      // var config = {

      // }
      axios
        .get("http://localhost:8080/api/public", {
          headers: {
            authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
          }
        })
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
