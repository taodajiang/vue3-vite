import '@/api/interceptors'                                                         // 配置axios请求拦截器
import bus from './event-bus'                                                       // 中间eventBus
import api from '@/api/api'                                                         // 配置api接口文件
import { setupElementPlus } from '@/plugins/element-plus'

// 全局挂载
export default (app) => {
  setupElementPlus(app)
  app.config.globalProperties.$bus = bus
  app.config.globalProperties.$api = api
}
