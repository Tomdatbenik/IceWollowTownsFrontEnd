<template>
  <div class="row">
    <div class="col-12">
      <div class="card rounded">
        <div class="card-header">
          <div class="card-title">
            <h4 class="display-4">Settlement</h4>

              <button v-on:click="GetToken"></button>
          </div>
        </div>
        <div class="card-body"></div>
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
  name: "Settlement",
  components: {},
  methods: {
    async GetToken() {
      const token = await this.$auth.getTokenSilently();
      this.token = token;
      axios
        .get("http://localhost:8080/api/settlement", {
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
