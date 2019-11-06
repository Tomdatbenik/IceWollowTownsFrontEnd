<template>
  <div id="app" class="container text-center">
    <FriendList/>
  </div>
</template>

<script>
import FriendList from "./components/FriendList.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "app",
  components: {
    FriendList
  }
};
</script>
