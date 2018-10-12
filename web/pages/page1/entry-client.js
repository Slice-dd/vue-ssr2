// /**
//  * 用于打包客户端部分的js逻辑
//  */
// import { createApp } from './app'

// import {getTime2} from '../../lib/myDate'
// console.log(getTime2());         //测试lib的两个导出模式

// // 客户端特定引导逻辑……
// const { app } = createApp(__INITIAL_STATE__)        //vue默认注入的全局变量数据
// // 这里假定 App.vue 模板中根元素具有 `id="app"`（服务器渲染后就有这个id）
// app.$mount('#app')

import Vue from 'vue'
import {
  createApp
} from './app.js'
// 客户端特定引导逻辑……
const {
  app,
  router,
  // store
} = createApp()
if (window.__INITIAL_STATE__) {
  // store.replaceState(window.__INITIAL_STATE__)
}

Vue.mixin({
  beforeMount() {
    const { asyncData } = this.$options
    if (asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
      this.dataPromise = asyncData({
        // store: this.$store,
        route: this.$route
      })
    }
  }
})
// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
  app.$mount('#app')
})