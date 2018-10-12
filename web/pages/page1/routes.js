import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from './view/Index';
import Detail from './view/Detail';

export function createRouter () {
  return new Router({
    // mode: 'history',
    routes: [
      { path: '/', component: Index, },
      { path: '/detail', component: Detail, name: 'Detail'  },
    ]
  })
}