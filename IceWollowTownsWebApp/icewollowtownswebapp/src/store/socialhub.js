import axios from 'axios'

export default {
    state: {
        friends: [],
        received_messages: [],
        chatid: null,
        chatname: null,
        friendid: null,
        activechat: null
    },
    mutations: {
        SET_CHATID(state, ChatId) {
            state.chatid = ChatId;
        },
        SET_ACTIVECHAT(state, ActiveChat) {
            state.activechat = ActiveChat;
        },
        SET_RECEIVEDMESSAGES(state, Message) {
            state.received_messages = [];

            Message.forEach(element => {
                state.received_messages.push(element)
            });

            console.log(state.received_messages)
        },
        SET_FRIENDS(state, Friend) {
            state.friends = [];

            Friend.forEach(element => {
                state.friends.push(element)
            });
        },
        SET_FRIENDID(state, FriendId) {
            state.friendid = FriendId
        },
        SET_CHATNAME(state, ChatName) {
            state.chatname = ChatName
        }
    },
    getters: {
        ChatId: state => {
            return state.chatid;
        },
        Friends: state => {
            return state.friends;
        },
        Messages: state => {
            return state.received_messages;
        },
        FriendId: state => {
            return state.friendid;
        },
        ChatName: state => {
            return state.chatname;
        },
        ActiveChat: state => {
            return state.activechat;
        }
    },
    actions: {
        async setFriendId(context, friendName) {
            console.log("testing getting friend")
            console.log(friendName)
            var token = this.getters.Token
            await axios
                .get(this.getters.UserBaseUrl + "/api/getUserByName", {
                    headers: {
                        authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                    },
                    params: {
                        name: friendName
                    }
                })
                .then(response => {
                    context.commit("SET_FRIENDID", response.data.id);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        setFriends(context, friend) {
            context.commit("SET_FRIENDS", friend)
        },
        setChatid(context, chatid) {
            context.commit("SET_CHATID", chatid)
        },
        setMessages(context, message) {
            context.commit("SET_RECEIVEDMESSAGES", message)
        },
        setChatName(context, message) {
            context.commit("SET_CHATNAME", message)
        },
        setActiveChat(context, message) {
            context.commit("SET_ACTIVECHAT", message)
        }
    }
}
