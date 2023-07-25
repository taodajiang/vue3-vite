export const permission = {
  mounted(el, binding) {
    const { value } = binding
    if (value) {
      const authRoles = value
      const hasAuth = {}.includes(authRoles)
      if (!hasAuth) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','test']"`)
    }
  }
}
