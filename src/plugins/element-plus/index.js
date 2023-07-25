const elMessageParamFun = (data) => {
  return {
    offset: 100,
    message: typeof data === 'string' ? data : data.message,
    type: data.type || '',
    grouping: data.grouping || false,
    center: data.center || false,
    showClose: Object.prototype.hasOwnProperty.call(data, 'showClose') ? data.showClose : true,
    duration: Object.prototype.hasOwnProperty.call(data, 'duration') ? data.duration : 1500
  }
}
console.dir(ElMessage.close)
// 重新定义message方法
export const elmessage = {
  ...ElMessage,
  message(data) {
    return ElMessage(elMessageParamFun(data))
  },
  success(data) {
    return ElMessage.success(elMessageParamFun(data))
  },
  warning(data) {
    return ElMessage.warning(elMessageParamFun(data))
  },
  info(data) {
    return ElMessage.info(elMessageParamFun(data))
  },
  error(data) {
    return ElMessage.error(elMessageParamFun(data))
  },
  closeAll() {
    return ElMessage.closeAll()
  }
}

// 设置全局message方法
export const setupElementPlus = (app) => {
  app.config.globalProperties.Message = (data) => {
    return elmessage.message(data)
  }
  app.config.globalProperties.Message.success = (data) => {
    return elmessage.success(data)
  }
  app.config.globalProperties.Message.warning = (data) => {
    return elmessage.warning(data)
  }
  app.config.globalProperties.Message.info = (data) => {
    return elmessage.info(data)
  }
  app.config.globalProperties.Message.error = (data) => {
    return elmessage.error(data)
  }
  app.config.globalProperties.Message.closeAll = () => {
    return elmessage.closeAll()
  }
}
