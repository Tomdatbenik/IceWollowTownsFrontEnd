import axios from 'axios'

export default {
    state: {
        settlement: {
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
        construction: {
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
    },
    mutations: {
        SET_SETTLEMENT(state, settlement) {
            state.settlement = settlement;
        },
        SET_SETTLEMENT_LOADING(state, loading) {
            state.settlementLoading = loading;
        },
        SET_CONSTRUCTION(state, construction) {
            state.construction = construction;
        }
    },
    getters: {
        SettlementLoading: state => {
            return state.settlementLoading;
        },
        getSettlement: state => {
            return state.settlement;
        },
        getConstruction: state => {
            return state.construction;
        }
    },
    actions: {
        FetchSettlement(context, User) {

            var token = this.getters.Token

            context.commit('SET_SETTLEMENT_LOADING', true)

            axios
                .get(this.getters.SettlementBaseUrl + "/api/getsettlement", {
                    headers: {
                        authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                    },
                    params: {
                        user_id: User.id
                    }
                })
                .then(response => {
                    if (response.data == "") {
                        axios
                            .get(this.getters.SettlementBaseUrl + "/api/createsettlement", {
                                headers: {
                                    authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                                },
                                params: {
                                    user_id: User.id
                                }
                            })
                            .then(res => {
                                context.commit("SET_SETTLEMENT", res.data)

                                axios
                                    .get(this.getters.SettlementBaseUrl + "/api/getconstruction", {
                                        headers: {
                                            authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                                        },
                                        params: {
                                            user_id: User.id
                                        }
                                    })
                                    .then(res => {
                                        context.commit("SET_CONSTRUCTION", res.data)
                                        context.commit('SET_SETTLEMENT_LOADING', false)
                                    })
                                    .catch(function (error) {
                                        // handle error
                                        console.log(error);
                                    })

                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .finally(function () {
                                // always executed
                            });
                    }
                    else {
                        context.commit("SET_SETTLEMENT", response.data)
                        axios
                            .get(this.getters.SettlementBaseUrl + "/api/getconstruction", {
                                headers: {
                                    authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                                },
                                params: {
                                    user_id: User.id
                                }
                            })
                            .then(res => {
                                context.commit("SET_CONSTRUCTION", res.data)
                                context.commit('SET_SETTLEMENT_LOADING', false)
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
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
