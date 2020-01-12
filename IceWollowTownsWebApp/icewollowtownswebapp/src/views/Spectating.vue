<template>
  <div class="row">
    <div class="col-12">
      <div class="card bg-dark rounded border border-light text-light mb-5 mt-2">
        <div class="card-header">
          <div class="card-title">
            <h4 class="display-4">Spectating Settlement</h4>
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
                  <p>Max population per 10/s : {{MaxPopulationPerTime}}</p>
                  <p>Max population: {{MaxPopualation}}</p>
                  <p>Adventurers: {{this.$store.getters.SpectateAdventurer}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="bg-dark rounded border border-light text-light mb-4" v-if="this.$store.getters.getSpectateSettlement.goldmines != ''">
                <div class="card-header">
                  <h4>Buildings</h4>
                </div>
                <div class="card-body">
                  <p>Goldmines: {{this.$store.getters.getSpectateSettlement.goldmines.length}}</p>
                  <p>Farms: {{this.$store.getters.getSpectateSettlement.farms.length}}</p>
                  <p>Lumberjacks: {{this.$store.getters.getSpectateSettlement.lumberjacks.length}}</p>
                  <p>stonemines: {{this.$store.getters.getSpectateSettlement.stonemines.length}}</p>
                  <p>Ironmines: {{this.$store.getters.getSpectateSettlement.ironmines.length}}</p>
                  <p>Smiths: {{this.$store.getters.getSpectateSettlement.smiths.length}}</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="bg-dark rounded border border-light text-light mb-4">
                <div class="card-header">
                  <h4>Resources</h4>
                </div>
                <div class="card-body">
                  <p>Gold: {{this.$store.getters.SpectateGold}}/ {{this.$store.getters.getSpectateSettlement.stockpile.maxGold}}</p>
                  <p>Food: {{this.$store.getters.SpectateFood}}/ {{this.$store.getters.getSpectateSettlement.stockpile.maxFood}}</p>
                  <p>Wood: {{this.$store.getters.SpectateWood}}/ {{this.$store.getters.getSpectateSettlement.stockpile.maxWood}}</p>
                  <p>Stone: {{this.$store.getters.SpectateStone}}/ {{this.$store.getters.getSpectateSettlement.stockpile.maxStone}}</p>
                  <p></p>
                  <p>Iron: {{this.$store.getters.SpectateIron}}/ {{this.$store.getters.getSpectateSettlement.stockpile.maxIron}}</p>
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
      MaxPopulationPerTime: 0,
      MaxPopualation: 0
    };
  },
  name: "Settlement",
  components: {},
  destroyed: function() {
    const message = {
      body: 37,
      type: "STOPSPECTATE"
    };

    this.SendMessage(message);
  },
  mounted: async function() {
    this.$store.dispatch("setSpectateUserId", 37);
    await this.$store.dispatch("GetSettlementById", 37);

    const message = {
      body: 37,
      type: "SPECTATE"
    };

    this.SendMessage(message);

    this.GetGoldIncome();
    this.GetWoodIncome();
    this.GetFoodIncome();
    this.GetStoneIncome();
    this.GetIronIncome();
    this.GetMaxPopulationPerTime();

    this.$store.dispatch("setSpectateUserId", 37);
    this.$store.dispatch("GetSettlementById", 37);
  },
  methods: {
    SendMessage: function(message) {
      this.$store.dispatch("SendMessageToStockpileWebsocket", message);
    },
    GetGoldIncome: function() {
      const goldmines = this.$store.getters.getSpectateSettlement.goldmines;
      for (let key in goldmines) {
        this.GoldIncome += goldmines[key].income;
      }
    },
    GetFoodIncome: function() {
      const farms = this.$store.getters.getSpectateSettlement.farms;
      for (let key in farms) {
        this.FoodIncome += farms[key].income;
      }
    },
    GetWoodIncome: function() {
      const lumberjacks = this.$store.getters.getSpectateSettlement.lumberjacks;
      for (let key in lumberjacks) {
        this.WoodIncome += lumberjacks[key].income;
      }
    },
    GetStoneIncome: function() {
      const stonemines = this.$store.getters.getSpectateSettlement.stonemines;
      for (let key in stonemines) {
        this.StoneIncome += stonemines[key].income;
      }
    },
    GetIronIncome: function() {
      const Ironmines = this.$store.getters.getSpectateSettlement.Ironmines;
      for (let key in Ironmines) {
        this.IronIncome += Ironmines[key].income;
      }

      const Smiths = this.$store.getters.getSpectateSettlement.smiths;
      for (let key in Smiths) {
        this.IronIncome += Smiths[key].income;
      }
    },
    GetMaxPopulationPerTime: function() {
      const Houses = this.$store.getters.getSpectateSettlement.houses;
      for (let key in Houses) {
        this.MaxPopulationPerTime += Houses[key].income;
      }
    }
  }
};
</script>
