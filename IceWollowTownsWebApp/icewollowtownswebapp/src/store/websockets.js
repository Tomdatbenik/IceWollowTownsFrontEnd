import Vue from 'vue'

export default {
    state: {
        stockpile: "ws://localhost:8083/ws/stockpile",

        stockpileSocket: {
            isConnected: false,
            message: '',
            reconnectError: false,
          }
    },
    mutations: {
       GET_CONNECTION_WITH_STOCKPILE(state)
       {
            Vue.prototype.$socket = event.currentTarget
            state.stockpileSocket.isConnected = true
       },
       SOCKET_ONMESSAGE (state, message)  {
        state.socket.message = message;
        state.resources = message;
      },
    },
    getters: {
        stockpileWebsocket: state =>
        {
            return state.stockpile;
        },
        getMessage: state=>
        {
            return state.message;
        }
    },
    actions: {
        ConnectWithStockpileWebsocket(context)
        {
            context.commit('GET_CONNECTION_WITH_STOCKPILE');
        },
        stockpileOnMessage(context,message)
        {
            context.commit('SOCKET_ONMESSAGE', message);
        }
    }
}
