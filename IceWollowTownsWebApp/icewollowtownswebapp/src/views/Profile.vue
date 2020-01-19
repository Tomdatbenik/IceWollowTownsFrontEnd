<template>
  <div class="row">
    <div class="col-6 offset-3">
      <div class="card bg-dark rounded border border-light text-light mt-2">
        <div class="card-header border border-light">
          <div class="card-title">
            <h4 class="display-4">Profile</h4>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div class="row">
                <div class="col">
                  <p class="text-left">Username:</p>
                </div>
                <div class="col">
                  <p class="text-left">{{ $auth.user.name }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="text-left">Email:</p>
                </div>
                <div class="col">
                  <p class="text-left">{{ $auth.user.email }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <img
                class="mr-2 rounded img-thumpnail"
                width="200"
                height="200"
                :src="$auth.user.picture"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col" v-if="!deleteCheck">
                  <button class="btn btn-outline-danger" v-on:click="AreYouSure">Reset settlement</button>
                </div>
                <div class="col" v-else>
                  <p>If you are sure you want to reset your settlement, press the button below.</p>
                  <button class="btn btn-outline-danger" v-on:click="DeleteSettlment">I am sure</button>
                </div>
              </div>
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
      token: null,
      deleteCheck: false
    };
  },
  name: "profile",
  components: {},
  methods: {
    AreYouSure: function() {
      this.deleteCheck = true;
    },
    DeleteSettlment: function() {
      this.$store.dispatch("DeleteSettlement");
    },
    async GetToken() {
      const token = await this.$auth.getTokenSilently();
      this.token = token;
      axios
        .get("http://localhost:8080/api/private", {
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
