import axios from 'axios'
import Vue from 'vue'

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
        },
        TryBuildBuilding: function (context, type) {
            axios
                .get(this.getters.SettlementBaseUrl + "/api/buildbuilding", {
                    headers: {
                        authorization: `Bearer ${this.getters.Token}` // send the access token through the 'Authorization' header
                    },
                    params: {
                        user_id: this.getters.User.id,
                        type: type.toUpperCase()
                    }
                })
                .then(res => {
                    if (res.data == true) {
                         Vue.toasted.show("Building finishished!", {
                            theme: "toasted-primary",
                            position: "bottom-right",
                            duration: 5000
                        });
                        
                        context.dispatch("FetchSettlement", this.getters.User)
                    }
                    else {
                        Vue.toasted.show("Building failed!", {
                            theme: "toasted-primary",
                            type: "error",
                            position: "bottom-right",
                            duration: 5000
                        });
                    }

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        TryUpgradeBuilding: function (context, Building) {
            axios
                .get(this.getters.SettlementBaseUrl + "/api/upgradebuilding", {
                    headers: {
                        authorization: `Bearer ${this.getters.Token}` // send the access token through the 'Authorization' header
                    },
                    params: {
                        user_id: this.getters.User.id,
                        building_id: Building.id,
                    }
                })
                .then(res => {
                    if (res.data == true) {
                         Vue.toasted.show("Upgrade finishished!", {
                            theme: "toasted-primary",
                            position: "bottom-right",
                            duration: 5000
                        });
                        
                        context.dispatch("FetchSettlement", this.getters.User)
                    }
                    else {
                        Vue.toasted.show("upgrade failed!", {
                            theme: "toasted-primary",
                            type: "error",
                            position: "bottom-right",
                            duration: 5000
                        });
                    }

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }
}
