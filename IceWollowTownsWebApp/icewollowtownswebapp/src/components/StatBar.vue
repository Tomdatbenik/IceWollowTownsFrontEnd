<template>
  <div class="row mb-1 position-fixed overlay">
    <div class="col m-0 p-0" v-bind:class="{ 'positive': lastGold ,'negative': !lastGold  }">
      <!-- A grey horizontal navbar that becomes vertical on small screens -->
      <ul class="list-group list-group-horizontal bg-dark pr-3 iceborder-bottom iceborder-left">
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastGold == 1 ,'negative': lastGold == -1, 'text-light': lastGold==0  }"
        >Gold: {{this.$store.getters.Gold}}</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastFood == 1 ,'negative': lastFood == -1, 'text-light': lastFood==0  }"
        >Food: {{this.$store.getters.Food}}</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastWood == 1 ,'negative': lastWood == -1, 'text-light': lastWood==0  }"
        >Wood: {{this.$store.getters.Wood}}</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastStone == 1 ,'negative': lastStone == -1, 'text-light': lastStone==0  }"
        >Stone: {{this.$store.getters.Stone}}</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastIron == 1 ,'negative': lastIron == -1, 'text-light': lastIron==0  }"
        >Iron: {{this.$store.getters.Iron}}</li>
        <li
          class="list-group-item bg-dark border-0 text-light"
        >Population: {{this.$store.getters.Population}}</li>
        <li
          class="list-group-item bg-dark border-0 text-light"
        >Adventurers: {{this.$store.getters.Adventurer}}</li>
        <li
          class="list-group-item bg-dark border-0 text-light"
        >Autonomy: {{this.$store.getters.Autonomy}}%</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statbar",
  components: {},
  computed: {
    lastGold: function() {
      let lastGold = 0;

      if (this.$store.getters.Gold > this.$store.getters.lastGold) {
        lastGold = 1;
      } else if (this.$store.getters.Gold < this.$store.getters.lastGold) {
        lastGold = -1;
      } else {
        lastGold = 0;
      }

      return lastGold;
    },
    lastFood: function() {
      let lastFood = 0;

      if (this.$store.getters.Food > this.$store.getters.lastFood) {
        lastFood = 1;
      } else if (this.$store.getters.Food < this.$store.getters.lastFood) {
        lastFood = -1;
      } else {
        lastFood = 0;
      }

      return lastFood;
    },
    lastWood: function() {
      let lastWood = 0;

      if (this.$store.getters.Wood > this.$store.getters.lastWood) {
        lastWood = 1;
      } else if (this.$store.getters.Wood < this.$store.getters.lastWood) {
        lastWood = -1;
      } else {
        lastWood = 0;
      }

      return lastWood;
    },
    lastStone: function() {
      let lastStone = 0;

      if (this.$store.getters.Stone > this.$store.getters.lastStone) {
        lastStone = 1;
      } else if (this.$store.getters.Stone < this.$store.getters.lastStone) {
        lastStone = -1;
      } else {
        lastStone = 0;
      }

      return lastStone;
    },
    lastIron: function() {
      let lastIron = 0;

      if (this.$store.getters.Iron > this.$store.getters.lastIron) {
        lastIron = 1;
      } else if (this.$store.getters.Iron < this.$store.getters.lastIron) {
        lastIron = -1;
      } else {
        lastIron = 0;
      }

      return lastIron;
    }
  }
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

.positive {
  -webkit-animation-name: positiveToWhite; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
  animation-name: positiveToWhite;
  animation-duration: 1s;
  color: lightgreen;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes positiveToWhite {
  from {
    color: green;
  }
  to {
    color: lightgreen;
  }
}

/* Standard syntax */
@keyframes positiveToWhite {
  from {
    color: green;
  }
  to {
    color: lightgreen;
  }
}

.negative {
  color: red !important;
}
</style>

