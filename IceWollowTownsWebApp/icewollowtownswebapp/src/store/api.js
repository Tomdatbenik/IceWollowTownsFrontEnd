export default {
    state: {
        user: "http://localhost:8082",
        settlement: "http://localhost:8084"
    },
    mutations: {
       
    },
    getters: {
        UserBaseUrl: state =>
        {
            return state.user;
        },
        SettlementBaseUrl: state =>
        {
            return state.settlement;
        },
    },
    actions: {

    }
}
