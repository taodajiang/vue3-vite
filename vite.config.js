import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'                              // 开启gizp压缩

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'            // 自动按需引入组件
import eslintPlugin from 'vite-plugin-eslint'                                      // eslint检查
import AutoImport from 'unplugin-auto-import/vite'                                 // 自动导入
import { visualizer } from 'rollup-plugin-visualizer'                              // 生成build分析页面(stats.html)

function resolve(dir) {
  return path.join(__dirname, dir)
}
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(),
      visualizer(),
      viteCompression(),
      Components({
        resolvers: [ElementPlusResolver()],
        directoryAsNamespace: true
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'vuex'],
        resolvers: [ElementPlusResolver()],
        eslintrc: {
          // 解决自动导入语法报错
          enabled: false,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        }
      }),
      eslintPlugin({
        include: [
          'src/**/*.js',
          'src/**/*.vue',
          'src/*.js',
          'src/*.vue'
        ]
      })
    ],
    server: {
      open: false,
      port: 8081,
      host: '0.0.0.0'
    },
    resolve: {
      // 设置文件快捷路径
      alias: {
        '@': resolve('src')
      }
    },
    css: {
      preprocessorOptions: {
        // 加载全局less
        less: {
          modifyVars: {
            hack: `true; @import '${resolve(
              'src/assets/css/common.less'
            )}'`
          },
          javascriptEnabled: true
        }
      }
    },
    build: {
      minify: 'esbuild',                       // 默认
      chunkSizeWarningLimit: 4000              // 消除打包大小超过500kb警告
    },
    esbuild: {
      drop: command === 'build' ? ['console', 'debugger'] : []
    }
  }
})
