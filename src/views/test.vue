<template>
  <!-- 模块一 -->
  <div>
    <div>
      <div class="test">模块一</div>
    </div>
  </div>

  <!-- 模块二 -->
  <div>模块二</div>

  <!-- 模块三 -->
  <div>模块三</div>

</template>

<script setup>
import user from '@/api/user.js'
const router = useRouter()
const store = useStore()
const { proxy } = getCurrentInstance()
onMounted(() => {
  proxy.Message.error(`test`)
})
</script>
<style lang="less" scoped>
</style>
