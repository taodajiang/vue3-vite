<template>
  <div
    ref="coverBoxRef"
    class="bg-box"
    @mouseenter="mouseenter"
    @mousemove="mousemove"
    @mouseleave="mouseleave"
  >
    <div ref="coverRef" class="bg overspread" v-show="isCover"></div>
    <div
      ref="serialImgRef"
      :style="{ 'background-position': backgroundPosition }"
      class="model-360-preview"
      v-show="!isCover"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  modelData: {
    type: Object,
    default: () => {}
  }
})

const coverBoxRef = ref(null)
const coverRef = ref(null)
const serialImgRef = ref(null)

const backgroundPosition = ref('')
const activeImg = ref(0)
const xStart = ref(null)
const eleWidth = ref('') // bg-box宽
const eleHeight = ref('') // bg-box高
const isCover = ref(true)

// 移入事件
const mouseenter = event => {
  isCover.value = false
  // serialImgRef.value.style.backgroundImage = `url('${props.modelData.serial}')`
  serialImgRef.value.style.backgroundSize = `${eleWidth.value * 15}px ${
    eleHeight.value
  }px`
  xStart.value = event.clientX
}
// 移出事件
const mouseleave = () => {
  isCover.value = true
  xStart.value = null
  activeImg.value = 0
  backgroundPosition.value = `0 center`
}

// 移动事件
const mousemove = event => {
  if (!xStart.value) return
  let xEnd = event.clientX
  if (xStart.value - xEnd > (0.5 * eleWidth.value) / 8) {
    activeImg.value--
    if (activeImg.value < 0) {
      activeImg.value = 15
    }
    backgroundPosition.value = `${
      (activeImg.value - 1) * eleWidth.value
    }px center`
    xStart.value = xEnd
  } else if (xEnd - xStart.value > (0.5 * eleWidth.value) / 8) {
    activeImg.value++
    if (activeImg.value > 15) {
      activeImg.value = 0
    }
    backgroundPosition.value = `${
      (activeImg.value + 1) * eleWidth.value
    }px center`
    xStart.value = xEnd
  }
}
onMounted(() => {
  eleWidth.value = coverBoxRef.value.offsetWidth
  eleHeight.value = coverBoxRef.value.offsetHeight
  // coverRef.value.style.backgroundImage = `url('${props.modelData.cover}')`
})
</script>

<style lang="less" scoped>
.bg-box {
  width: 300px;
  padding-bottom: 200px;
  position: relative;
  background: url('@/assets/img/modelBg.png') no-repeat;
  background-size: cover;
  background-position: 50%;
  margin: 200px auto;
  .bg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url('@/assets/img/cover.png');
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    position: absolute;
  }
  .overspread {
    background-size: 100% 100%;
  }
  .model-360-preview {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background-image: url('@/assets/img/serial.png');
    background-position: 0px center;
  }
}
</style>
