<template>
  <div class="row">
    <div class="col-12">
      <div class="card rounded">
        <div class="card-header">
          <div class="card-title">
            <h4 class="display-4">AdventurersGuild</h4>

            <h4>Available Expeditions</h4>
            <div v-for="expedition in expeditions" v-bind:key="expedition">
              <div class="row">
                <div class="col-3">
                  <h4>Reward</h4>
                  <h4>{{ expedition.reward }}</h4>
                </div>
                <div class="col-3">
                  <h4>ResourceType</h4>
                  <h4>{{ expedition.rewardtype }}</h4>
                </div>
                <div class="col-3">
                  <h4>Adventurers</h4>
                  <h4>{{ expedition.adventurercount }}</h4>
                </div>
                <div class="col-3">
                  <button id="start" class="btn" v-on:click="StartExpedition(expedition)">start</button>
                </div>
              </div>
            </div>
            <h4>OnGoing Expeditions</h4>
            <div v-for="expedition in activeexpeditions" v-bind:key="expedition">
              <div v-if="expedition.completed == false">
                <div class="row">
                  <div class="col-3">
                    <h4>Reward</h4>
                    <h4>{{ expedition.reward }}</h4>
                  </div>
                  <div class="col-3">
                    <h4>ResourceType</h4>
                    <h4>{{ expedition.rewardtype }}</h4>
                  </div>
                  <div class="col-3">
                    <h4>Adventurers</h4>
                    <h4>{{ expedition.adventurercount }}</h4>
                  </div>
                  <div class="col-3">
                    <h4>Time of completion</h4>
                    <h4>{{ expedition.stringifiedendtime }}</h4>
                  </div>
                </div>
              </div>
            </div>
            <h4>Completed Expeditions</h4>
            <div v-for="expedition in activeexpeditions" v-bind:key="expedition">
              <div v-if="expedition.completed == true">
                <div class="row">
                  <div class="col-3">
                    <h4>Reward</h4>
                    <h4>{{ expedition.reward }}</h4>
                  </div>
                  <div class="col-3">
                    <h4>ResourceType</h4>
                    <h4>{{ expedition.rewardtype }}</h4>
                  </div>
                  <div class="col-3">
                    <h4>Adventurers</h4>
                    <h4>{{ expedition.adventurercount }}</h4>
                  </div>
                  <div class="col-3">
                    <button id="start" class="btn" v-on:click="StartExpedition(expedition)">Collect Reward</button>
                  </div>
                </div>
              </div>
            </div>
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
      expeditions: null,
      activeexpeditions: null
    };
  },
  name: "merchantguild",
  components: {},
  mounted: function() {
    this.GenerateExpedition();
    this.GetActiveExpeditions();
  },
  methods: {
    async StartExpedition(expedition) {
      this.$store.dispatch("StartExpedition", expedition);
    },
    async GetActiveExpeditions() {
      this.activeexpeditions = await this.$store.dispatch(
        "GetActiveExpeditions"
      );

      console.log("SO CLOSE");
      console.log(this.activeexpeditions);
    },
    async GenerateExpedition() {
      this.expeditions = await this.$store.dispatch("GenerateExpedition");
    }
  }
};
</script>
