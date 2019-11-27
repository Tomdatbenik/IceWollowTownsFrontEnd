<template>
  <div class="row mb-1 position-fixed overlay">
    <div class="col m-0 p-0">
      <!-- A grey horizontal navbar that becomes vertical on small screens -->
      <ul class="list-group list-group-horizontal bg-dark pr-3 iceborder-bottom iceborder-left">
        <li class="list-group-item bg-dark text-light border-0">Autonomy: 0%</li>
        <li class="list-group-item bg-dark text-light border-0">Gold: 0</li>
        <li class="list-group-item bg-dark text-light border-0">Wood: 0</li>
        <li class="list-group-item bg-dark text-light border-0">Stone: 0</li>
        <li class="list-group-item bg-dark text-light border-0">Iron: 0</li>
        <li class="list-group-item bg-dark text-light border-0">Food: 0</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statbar",
  components: {}
};
</script>

<style>
.overlay {
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-radius: 0px 0px 0px 5px;
  z-index: 9000 !important;
  right: 0%;
}
</style>

