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
        user_loading : false
    },
    mutations: {
        SET_USER(state,user)
        {
            state.user = user;
        },
        SET_USER_LOADING(state, loading)
        {
            state.user_loading = loading;
        }
    },
    actions: {
        SetUser(context, user)
        {
            context.commit('SET_USER', user);
        },
        SetLoading(context, loading)
        {
            context,this.commit('SET_USER_LOADING', loading)
        }
    },
    getters: {
        DoneLoading: state =>
        {
            return state.user_loading;
        }
    },
})