<template>
<div class="h-100">
    <div id="app" class="container-fluid bg-dark h-100" v-if="!$auth.loading">
      <Navigation />
      <router-view />
      <Friendlist/>
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<style>

.iceborder
{
  border: #000f97 solid 1px;
}

.iceborder-bottom
{
  border-bottom: #000f97 solid 1px;
}

.iceborder-left
{
  border-left: #000f97 solid 1px;
}

.iceborder-right
{
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
import Friendlist from './components/FriendList'

export default {
  components: {
    Loading,
    Navigation,
    Friendlist
  }
};
</script>
