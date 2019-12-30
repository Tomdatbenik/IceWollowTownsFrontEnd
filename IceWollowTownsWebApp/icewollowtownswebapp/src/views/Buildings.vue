<template>
  <div class="row">
    <div class="col-12">
      <div class="card bg-dark rounded border border-light text-light mb-5">
        <div class="card-header">
          <div class="card-title">
            <h4 class="display-4">Buildings</h4>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6 mt-2">
              <building v-bind:building="$store.getters.getSettlement.townhall" />
            </div>
            <div class="col-6 mt-2">
              <building v-bind:building="$store.getters.getSettlement.stockpile" />
            </div>

            <div
              class="col-6 mt-2"
              v-for="(house,index) in $store.getters.getSettlement.houses"
              :key="index"
            >
              <building v-bind:building="house" />
            </div>

            <div
              class="col-6 mt-2"
              v-for="(goldmine,index) in $store.getters.getSettlement.goldmines"
              :key="index"
            >
              <building v-bind:building="goldmine" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(farm,index) in $store.getters.getSettlement.farms"
              :key="index"
            >
              <building v-bind:building="farm" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(lumberjack,index) in $store.getters.getSettlement.lumberjacks"
              :key="index"
            >
              <building v-bind:building="lumberjack" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(stonemine,index) in $store.getters.getSettlement.stonemines"
              :key="index"
            >
              <building v-bind:building="stonemine" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(ironmine,index) in $store.getters.getSettlement.ironmines"
              :key="index"
            >
              <building v-bind:building="ironmine" />
            </div>

            <div
              class="col-6 mt-2"
              v-for="(smith,index) in $store.getters.getSettlement.smiths"
              :key="index"
            >
              <building v-bind:building="smith" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import building from "../components/Building";

// @ is an alias to /src
export default {
  data() {
    return {};
  },
  name: "Buildings",
  components: { building },
  mounted: function() {},
  methods: {}
};
</script>
