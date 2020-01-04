<template>
  <div class="row mb-1 position-fixed overlay">
    <div class="col m-0 p-0">
      <!-- A grey horizontal navbar that becomes vertical on small screens -->
      <ul class="list-group list-group-horizontal bg-dark pr-3 iceborder-bottom iceborder-left">
        <li class="list-group-item bg-dark text-light border-0">Autonomy: {{this.$store.getters.Autonomy}}%</li>
        <li class="list-group-item bg-dark text-light border-0">Gold: {{this.$store.getters.Gold}}</li>
        <li class="list-group-item bg-dark text-light border-0">Wood: {{this.$store.getters.Wood}}</li>
        <li class="list-group-item bg-dark text-light border-0">Stone: {{this.$store.getters.Stone}}</li>
        <li class="list-group-item bg-dark text-light border-0">Iron: {{this.$store.getters.Iron}}</li>
        <li class="list-group-item bg-dark text-light border-0">Food: {{this.$store.getters.Food}}</li>
        <li class="list-group-item bg-dark text-light border-0">Population: {{this.$store.getters.Population}}</li>
        <li class="list-group-item bg-dark text-light border-0">Adventurers:  {{this.$store.getters.Adventurer}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statbar",
  components: {},
};
</script>

<style>
.overlay {
  border-top: 2px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-radius: 0px 0px 0px 5px;
  z-index: 9000 !important;
  right: 0%;
}
</style>

