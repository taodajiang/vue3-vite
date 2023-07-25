import utils from '@/utils/utils'
export default {
  /**
   * 设置缓存
   * @param key {string} key
   * @param val {string} 设置的值
  */
  set(key, val) {
    if (typeof val === 'object' && val) {
      localStorage.setItem(key, JSON.stringify(val))
    } else {
      localStorage.setItem(key, val)
    }
  },

  /**
   * 获取缓存
  */
  get(key) {
    let json = localStorage.getItem(key)
    return utils.isJSON(json) ? (JSON.parse(json) || {}) : json
  },

  /**
   * 删除
  */
  remove(key) {
    localStorage.removeItem(key)
  },

  /**
   * 清除缓存
  */
  clear() {
    localStorage.clear()
  },

  /**
   * 设置cookie
   * @param {string} key
   * @param {string} value
   * @param {string} day
  */
  setCookie(key, value, day) {
    let date = new Date()
    date.setDate(date.getDate() + day)
    document.cookie = `${key}=${value};expires=${date}`
  },

  /**
   * 获取cookie
  */
  getCookie(key) {
    let reg = RegExp(key + '=([^;]+)')
    let arr = document.cookie.match(reg)
    if (arr) {
      return arr[1]
    } else {
      return ''
    }
  },

  /**
   * 删除cookie
  */
  deleteCookie(key) {
    this.setCookie(key, null, -1)
  }
}
