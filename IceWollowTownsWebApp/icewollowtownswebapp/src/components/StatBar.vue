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
        <li class="list-group-item bg-dark text-light border-0">Population: 0</li>
        <li class="list-group-item bg-dark text-light border-0">Adventurers: 0</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import VueNativeSock from 'vue-native-websocket'
import VueNativeSock from "vue-native-websocket";
import store from '../store/index.js'

import Vue from "vue";
Vue.use(VueNativeSock, store.getters.stockpileWebsocket, {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000 // (Number) how long to initially wait before attempting a new (1000)
});

export default {
  name: "Statbar",
  components: {},
  data: function() {
    return {
      Message: {
        content: "",
        type: "CONNECT"
      },
      Chat: []
    };
  },
  created: function() {
     this.$store.dispatch('ConnectWithStockpileWebsocket')

    this.$options.sockets.onmessage = data => this.messageReceived(data);
    this.SendMessage();
  },
  methods: {
    SendMessage: function() {
      this.Message;
      this.Message.type = "CONNECT";

      this.$socket.send(JSON.stringify(this.Message));
    },
    messageReceived: function(data) {
      this.Chat.push(data.data);
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
</style>

