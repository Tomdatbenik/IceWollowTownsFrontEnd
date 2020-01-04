<template>
  <div class="card bg-dark rounded border border-light text-light mb-4">
    <div class="card-header">
      <div class="card-title">
        <h4 class="text-center">{{building.name}} lv.{{building.level}}</h4>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="m-0 p-0">Building info:</h5>
          <table class="table table-dark">
            <tr>
              <td>Description:</td>
              <td>{{building.description}}</td>
            </tr>
            <tr v-if="building.resource != null && building.income != 0">
              <td>Income:</td>
              <td>{{building.income}} {{building.resource.name}}</td>
            </tr>
            <tr v-if="building.maxPopulation != null">
              <td>Population:</td>
              <td v-if="building.maxPopulation == 1">{{building.maxPopulation}} person</td>
              <td v-else>{{building.maxPopulation}} persons</td>
            </tr>
            <tr v-if="building.resource != null">
              <td>Resource name:</td>
              <td>{{building.resource.name}}</td>
            </tr>
            <tr v-if="building.resource != null">
              <td>Resource description:</td>
              <td>{{building.resource.description}}</td>
            </tr>
            <tr v-if="building.maxHouses != null">
              <td>Max houses:</td>
              <td v-if="building.maxHouses != 1">{{building.maxHouses}} houses</td>
              <td v-else>{{building.maxHouses}} house</td>
            </tr>
            <tr v-if="building.maxGoldmines != null">
              <td>Max goldmines:</td>
              <td v-if="building.maxGoldmines != 1">{{building.maxGoldmines}} goldmines</td>
              <td v-else>{{building.maxGoldmines}} goldmine</td>
            </tr>
            <tr v-if="building.maxFarms != null">
              <td>Max farms:</td>
              <td v-if="building.maxFarms != 1">{{building.maxFarms}} farms</td>
              <td v-else>{{building.maxFarms}} farm</td>
            </tr>
            <tr v-if="building.maxStonemines != null">
              <td>Max stonemines:</td>
              <td v-if="building.maxStonemines != 1">{{building.maxStonemines}} stonemines</td>
              <td v-else>{{building.maxStonemines}} stonemine</td>
            </tr>
            <tr v-if="building.maxLumberjacks != null">
              <td>Max lumberjacks:</td>
              <td v-if="building.maxLumberjacks != 1">{{building.maxLumberjacks}} lumberjacks</td>
              <td v-else>{{building.maxLumberjacks}} lumberjack</td>
            </tr>
            <tr v-if="building.maxIronmines != null">
              <td>Max ironmines:</td>
              <td v-if="building.maxIronmines != 1">{{building.maxIronmines}} ironmines</td>
              <td v-else>{{building.maxIronmines}} ironmine</td>
            </tr>
            <tr v-if="building.maxSmiths != null">
              <td>Max smiths:</td>
              <td v-if="building.maxSmiths != 1">{{building.maxSmiths}} smiths</td>
              <td v-else>{{building.maxSmiths}} smith</td>
            </tr>
            <tr v-if="building.maxGold != null">
              <td>Max gold:</td>
              <td>{{building.maxGold}} gold</td>
            </tr>
            <tr v-if="building.maxFood != null">
              <td>Max food:</td>
              <td>{{building.maxFood}} pieces of food</td>
            </tr>
            <tr v-if="building.maxWood != null">
              <td>Max wood:</td>
              <td>{{building.maxWood}} pieces of wood</td>
            </tr>
            <tr v-if="building.maxStone != null">
              <td>Max stone:</td>
              <td>{{building.maxStone}} pieces of stone</td>
            </tr>
            <tr v-if="building.maxIron != null">
              <td>Max iron:</td>
              <td>{{building.maxIron}} bars of iron</td>
            </tr>
          </table>

          <h5 class="m-0 p-0" v-if="building.level != 5">Upgrade info:</h5>
          <table>
            <tr v-if="building.price.goldAmount != 0">
              <td>Gold:</td>
              <td>{{building.price.goldAmount}}</td>
            </tr>
            <tr v-if="building.price.foodAmount != 0">
              <td>Food:</td>
              <td>{{building.price.foodAmount}}</td>
            </tr>
            <tr v-if="building.price.woodAmount != 0">
              <td>Wood:</td>
              <td>{{building.price.woodAmount}}</td>
            </tr>
            <tr v-if="building.price.stoneAmount != 0">
              <td>Stone:</td>
              <td>{{building.price.stoneAmount}}</td>
            </tr>
            <tr v-if="building.price.ironAmount != 0">
              <td>Iron:</td>
              <td>{{building.price.ironAmount}}</td>
            </tr>
            <tr v-if="building.price.autonomyAmount != 0">
              <td>Autonomy required:</td>
              <td>{{building.price.autonomyAmount}}</td>
            </tr>
            <tr v-if="building.price.populationAmount != 0">
              <td>Population required:</td>
              <td>{{building.price.populationAmount}}</td>
            </tr>
          </table>

          <button
            type="button"
            class="btn btn-primary mt-4"
            v-on:click="TryUpgradeBuilding(building)" v-if="building.level != 5"
          >Upgrade</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Building",
  components: {},
  props: ["building"],
  methods: {
    TryUpgradeBuilding: function(building) {
      this.$store.dispatch("TryUpgradeBuilding", building);
    }
  }
};
</script>

<style scoped>
</style>