export default {
    state: {
        user: "http://localhost:8082"
    },
    mutations: {
       
    },
    getters: {
        UserBaseUrl: state =>
        {
            return state.user;
        },
    },
    actions: {

    }
}
