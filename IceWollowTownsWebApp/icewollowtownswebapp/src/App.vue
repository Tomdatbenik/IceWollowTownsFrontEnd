<template>
  <div class="h-100">
    <div class="container-fluid bg-dark fill" v-if="!$store.getters.Loading">
      <div v-if="!$store.getters.SettlementLoading">
        <Navigation />
        <router-view />
        <!-- <Friendlist /> -->
      </div>
      <div v-else class="container-fluid">
        <Loading msg="Loading settlement" />
      </div>
    </div>
    <div v-if="$store.getters.Loading" class="container-fluid">
      <Loading msg="Authenticating" />
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

.iceborder {
  border: #000f97 solid 1px;
}

.iceborder-bottom {
  border-bottom: #000f97 solid 1px;
}

.iceborder-left {
  border-left: #000f97 solid 1px;
}

.iceborder-right {
  border-right: #000f97 solid 1px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
// import Friendlist from "./components/FriendList";

export default {
  components: {
    Loading,
    Navigation
    // Friendlist
  }
};
</script>
