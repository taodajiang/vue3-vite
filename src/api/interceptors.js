import axios from 'axios'
import config from '@/config'
import { elmessage } from '@/plugins/element-plus'
axios.defaults.withCredentials = true
axios.defaults.baseURL = config.baseUrl                                     // 请求baseUrl
axios.defaults.timeout = 6000                                               // 请求超时
axios.defaults.retry = 3                                                    // 请求重试次数
axios.defaults.retryDelay = 1500                                            // 请求重试间隔

// 请求拦截
axios.interceptors.request.use(config => {
  let token = localStorage.getItem('xxxxx')
  if (token) {
    // 登录状态设置
    config.headers = {
      'Token': token
    }
  }
  return config
})

// 响应拦截器
axios.interceptors.response.use((res) => {
  elmessage.closeAll()
  // 此处状态码字段及状态码为模拟
  if (res.code !== 200) {
    if (res.code === '未登录') {
      elmessage.error('登录失效')
    }
    return Promise.reject('登录失效')
  }
  return res
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400: err.message = '请求错误(400)'; break
      case 401: err.message = '未授权，请重新登录(401)'; break
      case 403: err.message = '拒绝访问(403)'; break
      case 404: err.message = '请求出错(404)'; break
      case 408: err.message = '请求超时(408)'; break
      case 500: err.message = '服务器错误(500)'; break
      case 501: err.message = '服务未实现(501)'; break
      case 502: err.message = '网络错误(502)'; break
      case 503: err.message = '服务不可用(503)'; break
      case 504: err.message = '网络超时(504)'; break
      case 505: err.message = 'HTTP版本不受支持(505)'; break
      default: err.message = `连接出错(${err.response.status})!`
    }
  } else {
    // elMessage.closeAll()
    err.message = '连接服务器失败!'
  }
  return Promise.reject(err)
})

// 请求超时后重新发起请求
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config
  if (!config || !config.retry) {
    return Promise.reject(err)
  }
  // 设置变量跟踪重试次数
  config.__retryCount = config.__retryCount || 0
  if (config.__retryCount >= config.retry) {
    return Promise.reject(err)
  }
  // 增加请求重试次数
  config.__retryCount += 1
  // 创建新的异步请求
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })
  // 返回axios信息，重新请求
  return backoff.then(function () {
    return axios(config)
  })
})
