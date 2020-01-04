export default {
    state: {
        stockpileWS: 'ws://localhost:8083/ws/stockpile',
        socket: {}
    },
    mutations: {
        SET_STOCKPILE_SOCKET(state, socket)
        {
            state.socket = socket;
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
            return state.socket
        }
    },
    actions: {
        setSocket(context, socket)
        {
            context.commit("SET_STOCKPILE_SOCKET",socket);
        },
        SendMessageToStockpileWebsocket(context,message)
        {
            this.getters.getstockpileSocket.send(JSON.stringify(message));
        }
    }
}
