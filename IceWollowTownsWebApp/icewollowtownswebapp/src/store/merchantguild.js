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
        }
    }
}
