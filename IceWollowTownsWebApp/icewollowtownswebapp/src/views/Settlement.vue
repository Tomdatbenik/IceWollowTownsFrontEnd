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

// @ is an alias to /src
export default {
  data() {
    return {
      token: null
    };
  },
  name: "Settlement",
  components: {},
  mounted: function (){
    this.$store.dispatch('FetchSettlement');
  },
  methods: {

  }
};
</script>
