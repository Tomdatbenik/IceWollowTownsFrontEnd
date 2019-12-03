<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <div class="card-title">
            <h5 class="display-5">Friends</h5>
          </div>
        </div>
        <div class="card-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export default {
  name: "Friendlist",
  components: {},
  data: function() {
    return {
      Name: "",
      stompClient: null,
      connected: false,
      friends: []
    };
  },
  methods: {
    sendName() {
      this.stompClient.send(
        "/app/hello",
        {},
        JSON.stringify({ name: this.Name })
      );
    },
    Showfriend(Friend) {

      this.friends.push(Friend);
    }
  },
  created: function() {
    var socket = new SockJS("http://localhost:8080/IceWollowTownsWebsocket");
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, frame => {
      console.log("Connected: " + frame);

      this.stompClient.subscribe("/topic/friends", Friend => {
        this.Showfriend(JSON.parse(Friend.body).content);
      });
    });

    this.connected = true;
  },
  destroyed: function() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    this.connected = false;
    console.log("Disconnected");
  }
};
</script>