<template>
  <div class="row mt-5 pt-2">
    <div class="col-9">
      <table id="conversation" class="table table-striped">
        <thead>
          <tr>
            <div class="row">
              <div class="col-2">
                <th>Greetings</th>
              </div>
              <div class="col-2">
                <input v-model="chatmessage" placeholder="type here" />
              </div>
              <div class="col-2">
                <button v-on:click="SendChatMessage()">Send Message</button>
              </div>
            </div>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $store.getters.Messages" :key="item">
            <p>{{ item.sendername }} : {{ item.message }}</p>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-3 rounded">
      <input class="ml-1" v-model="requestedfriend" id="friendinput" placeholder="player username" />
      <button
        id="sendfriendrequest"
        class="btn-light float-left"
        v-on:click="AddFriend()"
      >Add friend</button>
      <h3>friends</h3>
      <div v-for="item in $store.getters.Friends" :key="item">
        <div class="row mt-2" v-if="item.status == 'ACCEPTED'">
          <div class="col-6">
            <h6>{{ item.username }}</h6>
          </div>
          <div class="col-3">
            <button v-on:click="GetChat(item.id, item.username, item.chatid)">Chat</button>
          </div>
          <div class="col-3">
            <button v-on:click="RemoveFriend(item.id, item.chatid)">Remove</button>
          </div>
        </div>
      </div>
      <h3>Pending Requests</h3>
      <div v-for="item in $store.getters.Friends" :key="item">
        <div class="row mt-2" v-if="item.status == 'PENDING'">
          <div class="col-6">
            <h6>{{ item.username }}</h6>
          </div>
          <div class="col-3" v-if="item.receipiant">
            <button v-on:click="AcceptFriend(item.id)">Accept</button>
          </div>
          <div class="col-3">
            <button v-on:click="RemoveFriend(item.id, item.chatid)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      requestedfriend: null,
      chatmessage: null,
      Message: {
        body: "",
        type: "CONNECT"
      }
    };
  },
  name: "socialhub",
  components: {},
  mounted: function() {},
  methods: {
    AddFriend: async function() {
      await this.$store.dispatch("setFriendId", this.requestedfriend);
      console.log("there is a message here " + this.$store.getters.FriendId);
      this.Message.body = this.$store.getters.FriendId;
      this.Message.type = "ADDFRIEND";

      this.SendMessage(this.Message);
      this.requestedfriend = "";
    },

    GetChat: function(friendid, friendname, activechat) {
      this.Message.body = friendid;
      this.Message.type = "GETCHAT";
      this.$store.dispatch("setChatid", friendid);
      this.$store.dispatch("setChatName", friendname);
      this.$store.dispatch("setActiveChat", activechat);
      console.log(activechat);
      console.log("hier");
      this.SendMessage(this.Message);
    },

    SendChatMessage: function() {
      console.log("Last tests");
      this.Message.body = this.chatmessage;
      this.Message.type = "SENDMESSAGE";
      this.Message.friendid = this.$store.getters.ChatId;
      this.Message.chatname = this.$store.getters.ChatName;
      this.SendMessage(this.Message);
    },

    AcceptFriend: function(friendid) {
      this.Message.body = friendid;
      this.Message.type = "ACCEPTREQUEST";
      this.SendMessage(this.Message);
    },

    RemoveFriend: function(friendid, chatid) {
      this.Message.body = friendid;
      this.Message.type = "REMOVEFRIEND";
      this.Message.chatid = chatid;
      this.SendMessage(this.Message);
    },

    SendMessage: function(message) {
      console.log("there is a message here " + message);
      console.log(message);
      this.$store.dispatch("SendMessageToSocialhubWebsocket", message);
    }
  }
};
</script>
