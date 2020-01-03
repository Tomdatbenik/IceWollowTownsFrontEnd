<template>
  <div>
    <div class="card bg-dark rounded border border-light text-light mb-4">
      <div class="card-header">
        <div class="card-title">
          <h4 class="text-center">{{building.name}}</h4>
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
            </table>

            <h5 class="m-0 p-0" v-if="building.level != 5">Build price info:</h5>
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

            <button type="button" class="btn btn-primary mt-4" v-on:click="TryBuildBuilding(building.name)" >Build</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Constcut",
  components: {},
  props: ["building"],
  methods: {
    TryBuildBuilding: function (type) {
      this.$store.dispatch("TryBuildBuilding", type)  
    }
  }
};
</script>

<style scoped>
</style>