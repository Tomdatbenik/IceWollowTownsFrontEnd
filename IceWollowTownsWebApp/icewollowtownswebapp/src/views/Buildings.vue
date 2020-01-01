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
            <div class="col">
              <button
                class="btn btn-dark float-left m-0"
                v-on:click="doBuilding"
                v-bind:class="{ 'btn-outline-success  ': !Construct ,'btn-outline-danger': Construct  }"
              ><h4>Construct</h4></button>
            </div>
          </div>
          <div class="row" v-if="!Construct">
            <div class="col-6 mt-2">
              <building v-bind:building="$store.getters.getSettlement.townhall" />
            </div>
            <div class="col-6 mt-2">
              <building v-bind:building="$store.getters.getSettlement.stockpile" />
            </div>

            <div
              class="col-6 mt-2"
              v-for="(house) in $store.getters.getSettlement.houses"
              v-bind:key="house.id"
            >
              <building v-bind:building="house" />
            </div>

            <div
              class="col-6 mt-2"
              v-for="(goldmine) in $store.getters.getSettlement.goldmines"
              v-bind:key="goldmine.id"
            >
              <building v-bind:building="goldmine" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(farm) in $store.getters.getSettlement.farms"
              v-bind:key="farm.id"
            >
              <building v-bind:building="farm" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(lumberjack) in $store.getters.getSettlement.lumberjacks"
              v-bind:key="lumberjack.id"
            >
              <building v-bind:building="lumberjack" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(stonemine) in $store.getters.getSettlement.stonemines"
              v-bind:key="stonemine.id"
            >
              <building v-bind:building="stonemine" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(ironmine) in $store.getters.getSettlement.ironmines"
              v-bind:key="ironmine.id"
            >
              <building v-bind:building="ironmine" />
            </div>

            <div
              class="col-6 mt-2"
              v-for="(smith) in $store.getters.getSettlement.smiths"
              v-bind:key="smith.id"
            >
              <building v-bind:building="smith" />
            </div>
          </div>
          <div class="row" v-else>
            <div v-if="!canBuild()" class="col-12">
              <h5>You have nothing left that can be build.</h5>
            </div>

            <div
              class="col-6 mt-2"
              v-for="(house) in $store.getters.getConstruction.houses"
              v-bind:key="house.id"
            >
              <construct v-bind:building="house" />
            </div>

            <div
              class="col-6 mt-2"
              v-for="(goldmine) in $store.getters.getConstruction.goldmines"
              v-bind:key="goldmine.id"
            >
              <construct v-bind:building="goldmine" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(farm) in $store.getters.getConstruction.farms"
              v-bind:key="farm.id"
            >
              <construct v-bind:building="farm" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(lumberjack) in $store.getters.getConstruction.lumberjacks"
              v-bind:key="lumberjack.id"
            >
              <construct v-bind:building="lumberjack" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(stonemine) in $store.getters.getConstruction.stonemines"
              v-bind:key="stonemine.id"
            >
              <construct v-bind:building="stonemine" />
            </div>
            <div
              class="col-6 mt-2"
              v-for="(ironmine) in $store.getters.getConstruction.ironmines"
              v-bind:key="ironmine.id"
            >
              <construct v-bind:building="ironmine" />
            </div>

            <div
              class="col-6 mt-2"
              v-for="(smith) in $store.getters.getConstruction.smiths"
              v-bind:key="smith.id"
            >
              <construct v-bind:building="smith" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import building from "../components/Building";
import construct from "../components/Construct";

// @ is an alias to /src
export default {
  data() {
    return {
      Construct: false
    };
  },
  name: "Buildings",
  components: { building, construct },
  mounted: function() {},
  methods: {
    doBuilding: function() {
      if (this.Construct) {
        this.Construct = false;
      } else {
        this.Construct = true;
      }
    },
    canBuild: function() {
      if (
        this.$store.getters.getConstruction.houses.length == 0 &&
        this.$store.getters.getConstruction.farms.length == 0 &&
        this.$store.getters.getConstruction.lumberjacks.length == 0 &&
        this.$store.getters.getConstruction.stonemines.length == 0 &&
        this.$store.getters.getConstruction.ironmines.length == 0 &&
        this.$store.getters.getConstruction.smiths.length == 0
      ) {
        return false;
      }

      return true;
    }
  }
};
</script>
