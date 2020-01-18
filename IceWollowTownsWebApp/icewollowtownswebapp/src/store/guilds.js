import axios from 'axios'

export default {
    state: {
    },
    actions: {
        BuyResource(context, payload) {
            var token = this.getters.Token

            console.log('testing in here')

            console.log(payload.amount);
            console.log(payload.type);
            console.log(this.getters.User.id);

            console.log('stop test')


            axios
                .request({
                    url: "/api/buy",
                    method: "get" ,
                    baseURL: this.getters.MerchantGuildBaseUrl,
                    headers: {
                        authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                    },
                    params:{
                        id : this.getters.User.id,
                        amount : payload.amount,
                        type : payload.type
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        SellResource(context, payload) {
            var token = this.getters.Token

            console.log('testing in here')

            console.log(payload.amount);
            console.log(payload.type);
            console.log(this.getters.User.id);

            console.log('stop test')


            axios
                .request({
                    url: "/api/sell",
                    method: "get" ,
                    baseURL: this.getters.MerchantGuildBaseUrl,
                    headers: {
                        authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                    },
                    params:{
                        id : this.getters.User.id,
                        amount : payload.amount,
                        type : payload.type
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        async GenerateExpedition() {
            
            var token = this.getters.Token
            var expeditions;

            console.log(this.getters.AdventurersGuildBaseUrl)

            await axios
            .request({
                url: "/api/generateexpedition",
                method: "post" ,
                baseURL: this.getters.AdventurersGuildBaseUrl,
                headers: {
                    authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                },
            }).then ( Response => {
                console.log("testing till sunrise")
                console.log(Response.data)
                expeditions = Response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

            console.log(expeditions)
            console.log("testing till midnight")

            return expeditions;
        },
        async StartExpedition(context, expedition) {
            console.log('sleep is close')
            console.log(expedition)
            var token = this.getters.Token

 

            await axios
            .request({
                url: "/api/startexpedition",
                method: "post" ,
                baseURL: this.getters.AdventurersGuildBaseUrl,
                headers: {
                    authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                },
                params:{
                    reward: expedition.reward,
                    rewardtype: expedition.rewardtype,
                    adventurercount: expedition.adventurercount,
                    userid:this.getters.User.id
                }
            }).then (   {

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        },
        async GetActiveExpeditions(context, expedition) {
            console.log('sleep is close')
            console.log(expedition)
            var expeditions;
            var token = this.getters.Token

 

            await axios
            .request({
                url: "/api/getactiveexpeditions",
                method: "get" ,
                baseURL: this.getters.AdventurersGuildBaseUrl,
                headers: {
                    authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                },
                params:{
                    userid:this.getters.User.id
                }
            }).then ( Response => {
                expeditions = Response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

            return expeditions
        },
        async RewardPlayer(context, expedition) {
            var token = this.getters.Token

            await axios
            .request({
                url: "/api/rewardplayer",
                method: "post" ,
                baseURL: this.getters.AdventurersGuildBaseUrl,
                headers: {
                    authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                },
                params:{
                    userid: this.getters.User.id,
                    expeditionid: expedition.id
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        },
        async TrainAdventurers(context, amount) {
            var token = this.getters.Token

            await axios
            .request({
                url: "/api/trainadventurers",
                method: "post" ,
                baseURL: this.getters.AdventurersGuildBaseUrl,
                headers: {
                    authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                },
                params:{
                    userid: this.getters.User.id,
                    amount: amount
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        },
        async HireAdventurers(context, amount) {
            var token = this.getters.Token

            await axios
            .request({
                url: "/api/hireadventurers",
                method: "post" ,
                baseURL: this.getters.AdventurersGuildBaseUrl,
                headers: {
                    authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
                },
                params:{
                    userid: this.getters.User.id,
                    amount: amount
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    }
}
