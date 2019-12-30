import axios from 'axios'

export default {
    state: {
        settlement:{
            id: 0,
            goldmines: [],
            houses: [],
            ironmine: [],
            lumberjacks: [],
            smiths: [],
            stonemines: [],
            stockpile: {},
            townHall: {},
        },
        settlementLoading: false,
        settlement_private_api_base_url: "localhost:8084/api/private",
    },
    mutations: {
        SET_SETTLEMENT(state, settlement) {
            state.settlement = settlement;
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
        getSettlement: state=>
        {
            return state.settlement;
        }
    },
    actions: {
        FetchSettlement(context) {

            var token = this.getters.Token

            context.commit('SET_SETTLEMENT_LOADING', true)

            axios
                .get(this.getters.SettlementBaseUrl + "/api/getsettlement", {
                    headers: {
                        authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                    },
                    params:{
                        user_id : this.getters.User.id
                    }
                })
                .then(response => {
                    if(response.data == "")
                    {
                        axios
                        .get(this.getters.SettlementBaseUrl + "/api/createsettlement", {
                            headers: {
                                authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                            },
                            params:{
                                user_id : this.getters.User.id
                            }
                        })
                        .then(res=> {
                            context.commit("SET_SETTLEMENT",res.data)
                            context.commit('SET_SETTLEMENT_LOADING', false)
                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                        .finally(function () {
                            // always executed
                        });
                    }
                    else{
                        context.commit("SET_SETTLEMENT",response.data)
                        context.commit('SET_SETTLEMENT_LOADING', false)
                    }
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
