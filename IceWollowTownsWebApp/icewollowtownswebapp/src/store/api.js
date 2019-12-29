export default {
    state: {
        user: "http://localhost:8082",
        settlement: "http://localhost:8084",
        merchantguild: "http://localhost:8086"
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
        MerchantGuildBaseUrl: state =>
        {
            return state.merchantguild;
        }
    },
    actions: {

    }
}
