<template>
  <div class="row mb-1 position-fixed overlay">
    <div class="col m-0 p-0" v-bind:class="{ 'positive': lastGold ,'negative': !lastGold  }">
      <!-- A grey horizontal navbar that becomes vertical on small screens -->
      <ul class="list-group list-group-horizontal bg-dark pr-3 iceborder-bottom iceborder-left">
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastGold == 1 ,'negative': lastGold == -1, 'text-light': lastGold==0  }"
        >Autonomy: {{this.$store.getters.Autonomy}}%</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastGold ,'negative': !lastGold  }"
        >Gold: {{this.$store.getters.Gold}}</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastGold ,'negative': !lastGold  }"
        >Wood: {{this.$store.getters.Wood}}</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastGold ,'negative': !lastGold  }"
        >Stone: {{this.$store.getters.Stone}}</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastGold ,'negative': !lastGold  }"
        >Iron: {{this.$store.getters.Iron}}</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastGold ,'negative': !lastGold  }"
        >Food: {{this.$store.getters.Food}}</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastGold ,'negative': !lastGold  }"
        >Population: {{this.$store.getters.Population}}</li>
        <li
          class="list-group-item bg-dark border-0"
          v-bind:class="{ 'positive': lastGold ,'negative': !lastGold  }"
        >Adventurers: {{this.$store.getters.Adventurer}}</li>
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
      console.log(this.$store.getters.Gold);
      let lastGold = 0;
      console.log(this.$store.getters.Gold);
      console.log(this.$store.getters.lastGold);
      if (this.$store.getters.Gold > this.$store.getters.lastGold) {
        lastGold = 1;
      } else if (this.$store.getters.Gold < this.$store.getters.lastGold) {
        lastGold = -1;
      } else {
        lastGold = 0;
      }
      this.delay();

      return lastGold;
    }
  },
  methods: {
    lastAutonomy: function() {
      return this.$store.getters.Autonomy > this.$store.getters.lastAutonomy;
    },
    delay() {
      // var timer = setInterval(() => {
      //   console.log("test");
      //   myStopFunction();
      // }, 400);

      // function myStopFunction() {
      //   clearInterval(timer);
      // }
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
  color: white;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes positiveToWhite {
  from {
    color: green;
  }
  to {
    color: white;
  }
}

/* Standard syntax */
@keyframes positiveToWhite {
  from {
    color: green;
  }
  to {
    color: white;
  }
}

.negative {
  color: red !important;
}
</style>

