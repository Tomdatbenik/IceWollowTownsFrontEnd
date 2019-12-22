import Vue from 'vue';
import Vuex from 'vuex';

//import settlementModule
import SettlementModule from '../store/settlement'
import Resources from '../store/resources'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        settlement: SettlementModule,
        resources : Resources
    },
    state: {
        user : {
            email : '',
            username : ''
        },
        user_loading : false,
        token: "",
    },
    mutations: {
        SET_USER(state,user)
        {
            state.user = user;
        },
        SET_USER_LOADING(state, loading)
        {
            state.user_loading = loading;
        },
        SET_TOKEN(state, token)
        {
            state.token = token;
        }
    },
    actions: {
        SetUser(context, user)
        {
            context.commit('SET_USER', user);
        },
        SetLoading(context, loading)
        {
            context.commit('SET_USER_LOADING', loading)
        },
        SetToken(context, token)
        {
            context.commit('SET_TOKEN',token)
        }
    },
    getters: {
        Loading: state =>
        {
            return state.user_loading;
        },
        Token:state=>
        {
            return state.token;
        }
    },
})