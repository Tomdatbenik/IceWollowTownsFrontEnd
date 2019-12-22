<template>
  <div>
    <div class="row mt-5">
      <div class="col-4 offset-4">
        <div class="loader"></div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4 offset-4">
        <h1 class="display-5 text-center text-white">{{msg}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  components: {},
  props: ['msg']
};
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: auto;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>