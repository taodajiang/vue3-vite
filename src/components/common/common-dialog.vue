<template>
  <el-dialog
    v-model="showDialog"
    :class="'common-dialog ' + className + ' ' + `title-${titleAlign}`"
    :width="width"
    :title="title"
    :fullscreen="fullscreen"
    :close-on-click-modal="clickModal"
    :lock-scroll="true"
    :close-on-press-escape="escape"
    :show-close="showClose"
    :draggable="draggable"
    :align-center="alignCenter"
    :append-to-body="appendToBody"
    :before-close="handleBeforClose"
  >
    <!-- title -->
    <template #header>
      <slot name="header" />
    </template>

    <!-- content -->
    <slot></slot>

    <!-- footer -->
    <template #footer>
      <slot name="footer" v-if="showFooter">
        <div class="dialog-footer">
          <el-button class="cancel" @click="handleClose">取消</el-button>
          <el-button
            class="confirm"
            type="primary"
            @click="confirm"
          >
            确定
          </el-button
          >
        </div>
      </slot>
    </template>

  </el-dialog>
</template>

<script setup>
const props = defineProps({
  modelValue: {                           // 是否显示弹窗 默认false
    type: Boolean,
    default: false
  },
  width: {                                // 弹窗的宽度 默认宽450px
    type: String,
    default: '740px'
  },
  fullscreen: {                           // 是否全屏 默认false
    type: Boolean,
    default: false
  },
  appendToBody: {                        // 是否插入到body中 默认false
    type: Boolean,
    default: false
  },
  clickModal: {                          // 点击遮罩背景是否可关闭
    type: Boolean,
    default: true
  },
  showClose: {                           // 是否显示title上的close按钮
    type: Boolean,
    default: true
  },
  title: {                               // 要显示的标题
    type: String,
    default: ''
  },
  showTitle: {                           // 是否显示title 默认true
    type: Boolean,
    default: true
  },
  titleAlign: {                          // 标题居中方式 默认center
    type: String,
    default: 'left'
  },
  escape: {                              // 是否按esc关闭
    type: Boolean,
    default: true
  },
  draggable: {                          // 是否可拖动
    type: Boolean,
    default: false
  },
  alignCenter: {                        // 弹窗是否上下居中
    type: Boolean,
    default: false
  },
  showFooter: {                          // 是否显示底部
    type: Boolean,
    default: true
  },
  className: {                          // dialog class类名
    type: String
  },
  beforeClose: {                        // 关闭前的方法
    type: Function
  }
})
const emit = defineEmits(['update:modelValue', 'close', 'confirm'])
// 显示弹窗
const showDialog = computed({
  get: () => props.modelValue,
  set: (val) => {
    return val
  }
})

// 弹窗关闭
const handleClose = () => {
  emit('close')
  emit('update:modelValue', false)
}
// 弹窗关闭之前
const handleBeforClose = (done) => {
  let isFunction = Object.prototype.toString.call(props.beforeClose) === '[object Function]'
  if (props.beforeClose && isFunction) {
    props.beforeClose()
  } else {
    handleClose()
  }
}

// 确定回调
const confirm = () => {
  emit('confirm')
}
</script>

<style lang="less">
.common-dialog {
  padding: 0;
  background: none;
  box-shadow: none;
  background: #fff;
  border-radius: 10px !important;
  .el-dialog {
    background: none;
    box-shadow: none;
  }
  .el-dialog__header {
    padding-right: 40px;
  }
  &.title-left {
    .el-dialog__header {
      text-align: left;
    }
  }
  &.title-center {
    .el-dialog__header {
      text-align: center;
    }
  }
  &.title-right {
    .el-dialog__header {
      text-align: right;
    }
  }
  .el-dialog__body {
    background: #fff;
    border-radius: 10px;
    font-size: 16px;
  }
  .dialog-content {
    padding: 25px 41px 30px 41px;
  }
  .dialog-footer {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 25px;
    button {
      width: 92px;
      height: 40px;
      border-radius: 4px;
      margin-left: 20px;
    }
  }
}
</style>
