    export default {
        state: {
            settlement_id : 0,
            settlementLoading: false,
        },
        mutations: {
            SET_SETTLEMENT_ID(state, id)
            {
                state.settlement_id = id;
            },
            SET_SETTLEMENT_LOADING(state, loading)
            {
                state.settlementLoading = loading;
            },
        },
        getters: {

        },
        actions : {
            FetchSettlement(context)
            {
                context.commit('SET_SETTLEMENT_LOADING', true)

            }
        }
    }
