import axios from 'axios'

export default {
    state: {
        settlement_id: 0,
        settlementLoading: false,
        settlement_private_api_base_url: "localhost:8084/api/private",
    },
    mutations: {
        SET_SETTLEMENT_ID(state, id) {
            state.settlement_id = id;
        },
        SET_SETTLEMENT_LOADING(state, loading) {
            state.settlementLoading = loading;
        },
    },
    getters: {
        SettlementLoading: state =>
        {
            return state.settlementLoading;
        },
    },
    actions: {
        FetchSettlement(context) {

            var token = this.getters.Token

            context.commit('SET_SETTLEMENT_LOADING', true)

            axios
                .get("http://localhost:8080/api/settlement", {
                    headers: {
                        authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                    }
                })
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    }
}
