<template>
  <div class="btnGroup">
    <div id="btnWrapper">
      <div class="btn active">嘻嘻</div>
      <div class="btn">嘿嘿</div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
function resetBtn(btns) {
  for (let i = 0; i < btns.length; i++) {
    setTimeout(() => {
      btns[i].className = 'btn'
    }, 100)
  }
}
onMounted(() => {
  let wrapper = document.getElementById('btnWrapper')
  // 给容器设置一个css变量并附初始值;
  wrapper.style.setProperty('--groove-left', '12px')
  let btns = document.getElementsByClassName('btn')
  for (let i = 0; i < btns.length; i++) {
    // 给每个按钮添加点击事件
    btns[i].addEventListener('click', function (e) {
      // 点击后，修改css变量的值
      wrapper.style.setProperty('--groove-left', `calc(12px + ${i * 50}%)`)
      resetBtn(btns) // 初始化所有按钮类名
      setTimeout(() => {
        btns[i].className = 'btn active' // 给被点击的按钮添加选中样式，注意不要丢了原始样式
      }, 500)
      wrapper.style.setProperty(
        '--wraper-origin',
        `${i === 0 ? '80% top' : '20% top'}`
      ) // 动态修改原点位置
      wrapper.style.setProperty('--wraper-rotate', `${i === 0 ? -8 : 8}deg`) // 按钮1为-8°，按钮2为8°
      wrapper.className = 'rotateWrap'
      setTimeout(() => {
        wrapper.className = ''
      }, 550)
    })
  }
})
</script>

<style lang="less" scoped>
.btnGroup {
  perspective: 500px; // 添加透视
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
#btnWrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 80px;
  padding: 12px 16px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #e2e6eb;
  box-shadow: -10px -10px 15px #f5f9fd, 10px 10px 15px #d8dbe5;
  transform-origin: var(--wraper-origin); // 修改为动态使用css变量
  transition: transform 0.4s cubic-bezier(0, 0, 0.48, 1); // 添加过渡效果
}
.rotateWrap {
  transform: rotateY(var(--wraper-rotate)); // 添加Y轴旋转
}
#btnWrapper::before {
  content: '';
  position: absolute;
  left: var(--groove-left); // 使用css变量
  top: 12px;
  width: calc(50% - 16px - 8px);
  height: calc(100% - 24px);
  border-radius: 12px;
  box-shadow: inset 8px 8px 6px #d9dce6, inset -5px -5px 15px #f5f9fd,
    inset -5px -5px 15px #f5f9fd, inset 7px 7px 6px #d9dce6;
  transition: left 1s cubic-bezier(0.82, 0.12, 0.18, 0.88); // 添加过渡效果，贝塞尔曲线;
}
.btn {
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: inherit;
  color: #aaa;
  cursor: pointer;
  transition: color 0.4s linear; // 添加文字颜色过渡效果
  animation: txtOutScale 0.6s linear; // 添加按钮未选中动画，注意时间
}
.active {
  color: #111;
  transform: scale(1.1); // 修改选中状态原始缩放为1.1
  animation: txtEnterScale 0.4s linear; // 添加按钮选中动画，注意时间
}
/* 按钮选中缩放动画 */
@keyframes txtEnterScale {
  0% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1.1);
  }
}
/* 按钮未选中缩放动画 */
@keyframes txtOutScale {
  0% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>
