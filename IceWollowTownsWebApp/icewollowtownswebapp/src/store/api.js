export default {
    state: {
        user: "http://localhost:8082",
        settlement: "http://localhost:8084",
        merchantguild: "http://localhost:8086",
        adventurersguild: "http://localhost:8088"
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
        },
        AdventurersGuildBaseUrl: state =>
        {
            return state.adventurersguild;
        }
    },
    actions: {

    }
}
