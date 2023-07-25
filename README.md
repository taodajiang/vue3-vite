# Vue 3 + Vite3 项目模板

## 项目使用版本

```
Vite: v3.1.0
Vue: v3.2.37
Nodejs: v16.0.0+(建议node版本)
```

## 安装

```
yarn install 或者 cnpm install
```

## 启动

```
npm run dev
```

## 发布

```
npm run build
```

## 项目结构

```
common
├─ .eslintignore
├─ .eslintrc-auto-import.json
├─ .eslintrc.js
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ api
│  │  ├─ api.js                                        # 所有api集合
│  │  ├─ interceptors.js                               # 请求拦截器
│  │  └─ user.js                                       # 不同模块请求方法
│  ├─ App.vue
│  ├─ assets                                           # 资源文件夹
│  │  ├─ css
│  │  │  └─ common.less                                # 公共less
│  │  ├─ images                                        # image文件夹
│  │  └─ js                                            # js文件夹
│  ├─ components                                       # 组件
│  │  ├─ common                                        # 公共组件
│  │  ├─ xxx                                           # 不同模块组件
│  │  ├─ xxx                                           # 不同模块组件
│  ├─ config                                           # 配置文件
│  │  └─ index.js
│  │  └─ xx.js
│  ├─ directives                                       # 指令管理
│  │  ├─ index.js                                      # 指令管理总入口
│  │  └─ test                                          # 不同模块指令
│  │     └─ index.js
│  ├─ main.js                                          # 项目入口文件
│  ├─ plugins                                          # 插件集合
│  │  ├─ element-plus                                  # element-plus部分封装
│  │  │  └─ index.js
│  │  ├─ event-bus.js                                  # event-bus
│  │  └─ index.js                                      # 插件集合总入口
│  ├─ router                                           # 路由文件
│  │  ├─ index.js
│  │  └─ modules                                       # 路由分模块
│  │     └─ test.js
│  ├─ store                                            # 状态管理
│  │  ├─ actions.js
│  │  ├─ index.js
│  │  ├─ modules                                       # 状态管理不同模块
│  │  │  └─ module1.js
│  │  ├─ mutations.js
│  │  └─ plugins                                       # 状态管理plugin
│  │     └─ test.js
│  ├─ utils                                            # 工具集合
│  │  ├─ storage.js
│  │  └─ util.js
│  └─ views                                            # 业务页面
│     ├─ cart                                          # 不同业务分不同文件夹
│     │  ├─ cart-add.vue
│     │  ├─ cart-list.vue
│     │  └─ components                                 # 当前业务下的组件(当前业务组件放当前文件下)
│     │     ├─ testDialog.vue
│     │     └─ xx.vue
│     └─ user
├─ vite.config.js                                      # vite配置文件
└─ yarn.lock
└─ 使用说明.md                                          # 部分使用说明

```
