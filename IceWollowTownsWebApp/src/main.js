import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Friendlist from "./components/FriendList.vue";
import Navigation from "./components/Navigation.vue";

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

const NotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/': Friendlist,
  '/navigation': Navigation,
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent)}
}).$mount('#app')

