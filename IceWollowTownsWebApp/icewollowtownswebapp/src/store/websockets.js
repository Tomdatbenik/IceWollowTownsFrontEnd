export default {
    state: {
        stockpileWS: 'ws://localhost:8083/ws/stockpile',
        socialhubWS: 'ws://localhost:8092/ws/socialhub',
        socialhubsocket: {},
        stockpilesocket: {}
    },
    mutations: {
        SET_STOCKPILE_SOCKET(state, stockpilesocket)
        {
            state.socket = socket;
        },
        SEND_STOCKPILE_MESSAGE(state, message)
        {
            state.socket.send(JSON.stringify(message));
            state.stockpilesocket = stockpilesocket;
        },
        SET_SOCIALHUB_SOCKET(state, socialhubsocket)
        {
            state.socialhubsocket = socialhubsocket;
        }

    },
    getters:
    {
        getstockpileWS: state =>
        {
            return state.stockpileWS
        },
        getstockpileSocket: state=>
        {
            return state.stockpilesocket
        },
        getsocialhubWS: state =>
        {
            return state.socialhubWS
        },
        getsocialhubSocket: state=>
        {
            return state.socialhubsocket
        }
    },
    actions: {
        setStockpileSocket(context, stockpilesocket)
        {
            context.commit("SET_STOCKPILE_SOCKET",stockpilesocket);
        },
        SendMessageToStockpileWebsocket(context,message)
        {
            context.commit("SEND_STOCKPILE_MESSAGE",message)
            this.getters.getstockpileSocket.send(JSON.stringify(message));
        },
        setSocialhubSocket(context, stockpilesocket)
        {
            context.commit("SET_SOCIALHUB_SOCKET",stockpilesocket);
        },
        SendMessageToSocialhubWebsocket(context,message)
        {
            this.getters.getsocialhubSocket.send(JSON.stringify(message));
        }
    }
}
