<template>
  <div>
    <!-- Stockpile Websocket -->
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "stockpileWebsocket",
  components: {},
  data: function() {
    return {
      Message: {
        body: "",
        type: "CONNECT"
      },
      Websocket: null
    };
  },
  mounted: function() {
    this.Websocket = new WebSocket(store.getters.getstockpileWS);

    this.Websocket.onmessage = this.messageReceived;

    this.Websocket.onerror = function(error) {
      console.log(`[error] ${error.message}`);
    };

    this.$store.dispatch("setStockpileSocket", this.$socket);

    this.$options.sockets.onmessage = data => this.messageReceived(data);
  },
  methods: {
    SendMessage: function(message) {
      this.Websocket.send(JSON.stringify(message));
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

