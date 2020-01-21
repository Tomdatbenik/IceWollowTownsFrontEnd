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
        spectateSettlement: {
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
    },
    mutations: {
        SET_SETTLEMENT(state, settlement) {
            state.settlement = settlement;
        },
        SET_SPECATE_SETTLEMENT(state, settlement) {
            state.spectateSettlement = settlement;
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
        },
        getSpectateSettlement: state => {
            return state.spectateSettlement;
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
                    console.log("before empty settlement")

                    if (response.data == "") {
                        axios.request({
                            method: 'POST',
                            url: this.getters.SettlementBaseUrl + "/api/createsettlement",
                            headers: {
                                authorization: `Bearer ${this.getters.Token}`,
                                "Content-Type": "application/json"
                            },
                            params: {
                                user_id: User.id
                            }
                        })
                            .then(res => {
                                context.commit("SET_SETTLEMENT", res.data)
                                context.commit("SET_RESOURCES", res.data.stockpile);
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
                        console.log("it is confused")

                        context.commit("SET_SETTLEMENT", response.data)
                        context.commit("SET_RESOURCES", response.data.stockpile);
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
            axios.request({
                method: 'POST',
                url: this.getters.SettlementBaseUrl + "/api/buildbuilding",
                headers: {
                    authorization: `Bearer ${this.getters.Token}`,
                    "Content-Type": "application/json"
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
            axios.request({
                method: 'POST',
                url: this.getters.SettlementBaseUrl + "/api/upgradebuilding",
                headers: {
                    authorization: `Bearer ${this.getters.Token}`,
                    "Content-Type": "application/json"
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
        },
        GetSettlementById: async function (context, id) {
            context.commit("SET_SPECTATELOADING", true)
            await axios
                .get(this.getters.SettlementBaseUrl + "/api/getsettlement", {
                    headers: {
                        authorization: `Bearer ${this.getters.Token}` // send the access token through the 'Authorization' header
                    },
                    params: {
                        user_id: id
                    }
                })
                .then(response => {
                    context.commit("SET_SPECATE_SETTLEMENT", response.data);
                    context.commit("SET_SPECTATELOADING", false)
                })
        },
        DeleteSettlement()
        {
            axios.request({
                method: 'DELETE',
                url: this.getters.SettlementBaseUrl + "/api/deletesettlement",
                headers: {
                    authorization: `Bearer ${this.getters.Token}`,
                    "Content-Type": "application/json"
                },
                params: {
                    user_id: this.getters.User.id,
                }
            }).then(response=>{
                if(response.data)
                {
                   this.dispatch("FetchSettlement",this.getters.User)
                }
            })
        }

    }
}
