<template>
  <div class="row">
    <div class="col-12">
      <div class="card rounded">
        <div class="card-header">
          <div class="card-title">
            <h4 class="display-4">MerchantGuild</h4>
          </div>
          <div class="row">
            <div class="col-3">Food</div>
            <div class="col-3">
              <input v-model="food" placeholder="0" />
            </div>
            <div class="col-3">
              <button id="buy" class="btn" v-on:click="BuyResource(food, 'food')">buy</button>
            </div>
            <div class="col-3">
              <button id="sell" class="btn" v-on:click="SellResource(food, 'food')">sell</button>
            </div>
          </div>
          <div class="row">
            <div class="col-3">Wood</div>
            <div class="col-3">
              <input v-model="wood" placeholder="0" />
            </div>
            <div class="col-3">
              <button id="buy" class="btn" v-on:click="BuyResource(wood, 'wood')">buy</button>
            </div>
            <div class="col-3">
              <button id="sell" class="btn" v-on:click="SellResource(wood, 'wood')">sell</button>
            </div>
          </div>
          <div class="row">
            <div class="col-3">Stone</div>
            <div class="col-3">
              <input v-model="stone" placeholder="0" />
            </div>
            <div class="col-3">
              <button id="buy" class="btn" v-on:click="BuyResource(stone, 'stone')">buy</button>
            </div>
            <div class="col-3">
              <button id="sell" class="btn" v-on:click="SellResource(stone, 'stone')">sell</button>
            </div>
          </div>
          <div class="row">
            <div class="col-3">Iron</div>
            <div class="col-3">
              <input v-model="iron" placeholder="0" />
            </div>
            <div class="col-3">
              <button id="buy" class="btn" v-on:click="BuyResource(iron, 'iron')">buy</button>
            </div>
            <div class="col-3">
              <button id="sell" class="btn" v-on:click="SellResource(iron, 'iron')">sell</button>
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
      iron: null,
      stone: null,
      food: null,
      wood: null,
    };
  },
  name: "merchantguild",
  components: {},
  mounted: function() {},
  methods: {
      async BuyResource(amount, type) {
          var payload = {'amount': amount, 'type': type}
          this.$store.dispatch('BuyResource', payload);
      },
            async SellResource(amount, type) {
          var payload = {'amount': amount, 'type': type}
          this.$store.dispatch('SellResource', payload);
      }
  }
};
</script>
