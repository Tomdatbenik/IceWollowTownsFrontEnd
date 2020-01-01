import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

//import settlementModule
import SettlementModule from '../store/settlement'
import Resources from '../store/resources'
import Guilds from '../store/guilds'
import Api from '../store/api'
import Websockets from '../store/websockets'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    settlement: SettlementModule,
    resources: Resources,
    api: Api,
    guilds: Guilds,
    websockets: Websockets
  },
  state: {
    user: {
      id: '',
      email: '',
      username: ''
    },
    user_loading: false,
    token: "",
  },
  mutations: {
    LOGIN(state, user) {
      axios
        .get(this.getters.UserBaseUrl + "/api/getUserByEmail", {
          headers: {
            authorization: `Bearer ${state.token}` // send the access token through the 'Authorization' header
          },
          params: {
            email: state.user.email
          }
        })
        .then(response => {
          if (response.data == "") {
            axios
              .get(this.getters.UserBaseUrl + "/api/addUser", {
                headers: {
                  authorization: `Bearer ${state.token}` // send the access token through the 'Authorization' header
                },
                params: {
                  email: state.user.email,
                  username: state.user.username
                }
              })
              .then(res => {
                user = {
                  id: res.data.id,
                  email: res.data.email,
                  username: res.data.username
                }

                this.dispatch('SetUser', user);
                this.dispatch('FetchSettlement',user);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
          }
          else {
            user = {
              id: response.data.id,
              email: response.data.email,
              username: response.data.username
            }
            
            this.dispatch('SetUser', user);
            this.dispatch('FetchSettlement',user);
          }


          this.dispatch('SetLoading', false);


        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_USER_LOADING(state, loading) {
      state.user_loading = loading;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    }
  },
  actions: {
    Login(context, user) {
      context.commit('LOGIN', user);
    },
    SetUser(context, user) {
      context.commit('SET_USER', user);
    },
    SetLoading(context, loading) {
      context.commit('SET_USER_LOADING', loading)
    },
    SetToken(context, token) {
      context.commit('SET_TOKEN', token)
    }
  },
  getters: {
    Loading: state => {
      return state.user_loading;
    },
    Token: state => {
      return state.token;
    },
    User: state => {
      return state.user;
    }
  },
})