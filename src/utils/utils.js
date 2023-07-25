/**
 * 使用方法
*/
export default {
  /**
   * 判断字符串是否是json
  */
  isJSON(str) {
    if (!str) return false
    if (typeof str === 'string') {
      try {
        var obj = JSON.parse(str)
        console.log(obj, typeof obj)
        if (typeof obj === 'object' && obj) {
          return true
        } else {
          return false
        }
      } catch (e) {
        return false
      }
    }
  }
}
