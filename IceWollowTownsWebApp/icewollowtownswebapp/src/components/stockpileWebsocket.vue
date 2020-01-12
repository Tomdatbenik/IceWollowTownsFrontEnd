<template>
  <div>
    <!-- Stockpile Websocket -->
  </div>
</template>

<script>
// import VueNativeSock from 'vue-native-websocket'
import VueNativeSock from "vue-native-websocket";
import store from "../store/index.js";

import Vue from "vue";
Vue.use(VueNativeSock, store.getters.getstockpileWS, {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 20, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 1000 // (Number) how long to initially wait before attempting a new (1000)
});

export default {
  name: "stockpileWebsocket",
  components: {},
  data: function() {
    return {
      Message: {
        body: "",
        type: "CONNECT"
      }
    };
  },
  mounted: function() {
    this.$store.dispatch("setSocket", this.$socket);

    this.$options.sockets.onmessage = data => this.messageReceived(data);
  },
  methods: {
    SendMessage: function(message) {
      this.$store.dispatch("SendMessageToStockpileWebsocket", message);
    },
    messageReceived: function(data) {
      this.Message = JSON.parse(data.data);

      switch (this.Message.type) {
        case "CONNECT":
          this.Message.type = "CONNECT";
          this.Message.body = this.$store.getters.User.id;

          this.SendMessage(this.Message);
          break;
        case "STOCKPILE":
          this.$store.dispatch("setResources", JSON.parse(this.Message.body));
          break;
        case "SPECTATE":
          this.$store.dispatch(
            "setSpectateResources",
            JSON.parse(this.Message.body)
          );
          break;
      }
    }
  }
};
</script>

