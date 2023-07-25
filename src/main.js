import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import setPlugins from '@/plugins/index'                              // 插件、全局变量
import * as directives from '@/directives'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

let app = createApp(App)
setPlugins(app)

// 自定义指令
Object.keys(directives).forEach(key => {
  app.directive(key, directives[key])
})

app
  .use(router)
  .use(store)
  .use(ElementPlus, {
    locale: zhCn
  })
  .mount('#app')
