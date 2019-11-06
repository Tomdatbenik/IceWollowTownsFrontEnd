<template>
  <div>
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
