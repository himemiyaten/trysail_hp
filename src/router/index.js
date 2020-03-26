import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Paginate from 'vuejs-paginate'
import VuePaginate from 'vue-paginate';
import lodash from 'lodash' 
Vue.use(Router)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('paginate', Paginate)
Vue.use(VuePaginate);
Vue.use(lodash)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})