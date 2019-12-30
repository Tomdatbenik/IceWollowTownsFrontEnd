<template>
  <div class="row mb-1">
    <div class="col m-0 p-0">
      <nav class="navbar navbar-expand-sm bg-dark iceborder-bottom">
        <ul class="navbar-nav w-100 d-flex">
          <li class="nav-item">
            <router-link class="navbar-brand text-light" to="/profile">
              <div class="row">
                <div class="col m-0">
                  <img class="mr-2 rounded" width="30" height="30" :src="$auth.user.picture" />
                </div>
                <div class="col m-0">
                  <p class="text-light m-0">{{ $auth.user.name }}</p>
                </div>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/">Settlement</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/buildings">Buildings</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/merchantguild">Merchant guild</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/home">Adventurer guild</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/home">Passives</router-link>
          </li>
        </ul>
        <button
          class="btn btn-dark float-right m-0"
          v-bind:class="{ 'btn-outline-light': !stats ,'btn-outline-danger': stats  }"
          v-on:click="ToggleStatbar"
        >Resources</button>
      </nav>
      <div class="col-12" v-if="this.stats">
        <Statbar />
      </div>
    </div>
  </div>
</template>

<script>
import Statbar from "./StatBar";
export default {
  name: "Navigation",
  components: {
    Statbar
  },
  data() {
    return {
      stats: true
    };
  },
  methods: {
    ToggleStatbar() {
      if (!this.stats) {
        this.stats = true;
      } else {
        this.stats = false;
      }
    },
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>

<style scoped>
.icon {
  height: 30px;
  width: 30px;
}
</style>