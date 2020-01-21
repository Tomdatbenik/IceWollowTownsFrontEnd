<template>
  <div>
    <!-- Socialhub Websocket -->
  </div>
</template>

<script>
// import VueNativeSock from 'vue-native-websocket'
import VueNativeSock from "vue-native-websocket";
import store from "../store/index.js";

import Vue from "vue";
Vue.use(VueNativeSock, store.getters.getsocialhubWS, {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 20, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 1000 // (Number) how long to initially wait before attempting a new (1000)
});

export default {
  name: "socialhubWebsocket",
  components: {},
  data: function() {
    return {
      Message: {
        body: "",
        type: "CONNECT"
      },
      CollectionMessage: {
        body: [],
        type: ""
      }
    };
  },
  mounted: function() {
    this.$store.dispatch("setSocialhubSocket", this.$socket);

    this.$options.sockets.onmessage = data => this.messageReceived(data);
  },
  methods: {
    SendMessage: function(message) {
      this.$store.dispatch("SendMessageToSocialhubWebsocket", message);
    },
    messageReceived: function(data) {
      this.Message = JSON.parse(data.data);
      switch (this.Message.type) {
        case "CONNECT":
          this.Message.type = "CONNECT";
          this.Message.body = this.$store.getters.User.id;

          this.SendMessage(this.Message);
          break;
        case "GETFRIENDS":
          this.Message.body = this.$store.getters.User.id;
          this.Message.type = "GETFRIENDS";
          this.SendMessage(this.Message);
          break;
        case "RECEIVEFRIENDS":
          this.CollectionMessage = JSON.parse(data.data);
          this.$store.dispatch("setFriends", this.CollectionMessage.friends);
          break;
        case "GETCHAT":
          this.CollectionMessage = JSON.parse(data.data);
          if (
            this.CollectionMessage.chat.id == this.$store.getters.ActiveChat
          ) {
            this.$store.dispatch(
              "setMessages",
              this.CollectionMessage.chat.messages
            );
          }
      }
    }
  }
};
</script>

