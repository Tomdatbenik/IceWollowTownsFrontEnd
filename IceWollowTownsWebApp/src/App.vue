<template>
  <div id="app" class="container text-center">
    <Navigation/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>
