<template>
  <div class="row">
    <div class="col-12">
      <div class="card bg-dark rounded border border-light text-light mb-5 mt-2">
        <div class="card-header">
          <div class="card-title">
            <h4 class="display-4">Settlement</h4>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div class="bg-dark rounded border border-light text-light mb-4">
                <div class="card-header">
                  <h4>Incomes</h4>
                </div>
                <div class="card-body">
                  <p>Gold income: {{this.GoldIncome}} /10 s</p>
                  <p>Food income: {{this.FoodIncome}} /10 s</p>
                  <p>Wood income: {{this.WoodIncome}} /10 s</p>
                  <p>Stone income: {{this.StoneIncome}} /10 s</p>
                  <p>Iron income: {{this.IronIncome}} /10 s</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="bg-dark rounded border border-light text-light mb-4">
                <div class="card-header">
                  <h4>Population</h4>
                </div>
                <div class="card-body">
                  <p>Chance of getting population: 50%</p>
                  <p>Population per 10/s : {{PopulationPerTime}}</p>
                  <p>Max population: {{MaxPopualation}}</p>
                  <p>Adventurers: {{this.$store.getters.Adventurer}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="bg-dark rounded border border-light text-light mb-4">
                <div class="card-header">
                  <h4>Buildings</h4>
                </div>
                <div class="card-body">
                  <p>Goldmines: {{this.$store.getters.getSettlement.goldmines.length}}</p>
                  <p>Farms: {{this.$store.getters.getSettlement.farms.length}}</p>
                  <p>Lumberjacks: {{this.$store.getters.getSettlement.lumberjacks.length}}</p>
                  <p>stonemines: {{this.$store.getters.getSettlement.stonemines.length}}</p>
                  <p>Ironmines: {{this.$store.getters.getSettlement.ironmines.length}}</p>
                  <p>Smiths: {{this.$store.getters.getSettlement.smiths.length}}</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="bg-dark rounded border border-light text-light mb-4">
                <div class="card-header">
                  <h4>Resources</h4>
                </div>
                <div class="card-body">
                  <p>Gold: {{this.$store.getters.Gold}}/ {{this.$store.getters.getSettlement.stockpile.maxGold}}</p>
                  <p>Food: {{this.$store.getters.Food}}/ {{this.$store.getters.getSettlement.stockpile.maxFood}}</p>
                  <p>Wood: {{this.$store.getters.Wood}}/ {{this.$store.getters.getSettlement.stockpile.maxWood}}</p>
                  <p>Stone: {{this.$store.getters.Stone}}/ {{this.$store.getters.getSettlement.stockpile.maxStone}}</p>
                  <p></p>
                  <p>Iron: {{this.$store.getters.Iron}}/ {{this.$store.getters.getSettlement.stockpile.maxIron}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      GoldIncome: 0,
      FoodIncome: 0,
      WoodIncome: 0,
      StoneIncome: 0,
      IronIncome: 0,
      PopulationPerTime: 0,
      MaxPopualation: 0
    };
  },
  name: "Settlement",
  components: {},
  mounted: function() {
    this.GetGoldIncome();
    this.GetWoodIncome();
    this.GetFoodIncome();
    this.GetStoneIncome();
    this.GetIronIncome();
    this.GetPopulationPerTime();
    this.GetMaxPopulation();
  },
  methods: {
    GetGoldIncome: function() {
      const goldmines = this.$store.getters.getSettlement.goldmines;
      for (let key in goldmines) {
        this.GoldIncome += goldmines[key].income;
      }
    },
    GetFoodIncome: function() {
      const farms = this.$store.getters.getSettlement.farms;
      for (let key in farms) {
        this.FoodIncome += farms[key].income;
      }
    },
    GetWoodIncome: function() {
      const lumberjacks = this.$store.getters.getSettlement.lumberjacks;
      for (let key in lumberjacks) {
        this.WoodIncome += lumberjacks[key].income;
      }
    },
    GetStoneIncome: function() {
      const stonemines = this.$store.getters.getSettlement.stonemines;
      for (let key in stonemines) {
        this.StoneIncome += stonemines[key].income;
      }
    },
    GetIronIncome: function() {
      const Ironmines = this.$store.getters.getSettlement.Ironmines;
      for (let key in Ironmines) {
        this.IronIncome += Ironmines[key].income;
      }

      const Smiths = this.$store.getters.getSettlement.smiths;
      for (let key in Smiths) {
        this.IronIncome += Smiths[key].income;
      }
    },
    GetMaxPopulation: function() {
      const Houses = this.$store.getters.getSettlement.houses;
      for (let key in Houses) {
        this.MaxPopualation += Houses[key].maxPopulation;
      }
    },
    GetPopulationPerTime: function() {
      const Houses = this.$store.getters.getSettlement.houses;
      for (let key in Houses) {
        this.PopulationPerTime += Houses[key].income;
      }
    }
  }
};
</script>
