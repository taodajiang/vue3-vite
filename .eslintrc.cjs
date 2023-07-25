module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    './.eslintrc-auto-import.json',
    'prettier'
  ],
  globals: {
    ElMessage: 'readonly',
    ElMessageBox: 'readonly',
    ElLoading: 'readonly'
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    semi: ['error', 'never'],                                                                        // 禁止结尾分号
    'comma-dangle': ['error', 'never'],                                                              // 禁止结尾逗号
    'comma-spacing': ['error', { before: false, after: true }],                                      // 变量声明，数组文字，对象文字，函数参数和序列中的逗号前后加上一致的间距
    'vue/multi-word-component-names': 'off',                                                         // 关闭组件命名校验
    'no-unused-vars': [                                                                              // setup语法 未定义
      'error',
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    'vue/html-indent': [                                                                             // html标签的缩进为需要2个空格
      'warn',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    indent: ['error', 2, { SwitchCase: 1 }],                                                          // 缩进2个空格
    camelcase: [                                                                                      // 使用骆驼命名约定
      'error',
      {
        ignoreDestructuring: true,
        ignoreGlobals: true,
        ignoreImports: true,
        properties: 'never'
      }
    ],
    eqeqeq: 'error',                                                                                  // 使用 === 和 !==
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],                               // 对象字面量的键和值之间使用一致的空格
    'semi-spacing': 'error',                                                                          // 强制分号后面有空格
    'keyword-spacing': ['error', { before: true, after: true }],                                      // 关键字后面要有一个空格
    'arrow-spacing': 'error',                                                                         // 箭头函数的 => 前后有空格
    'spaced-comment': 'error',                                                                        // 单行注释后要有一个空格
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],                                      // 禁止出现多行空行
    'no-trailing-spaces': 'error',                                                                    // 禁止一行结束后面不要有空格
    'space-before-blocks': 'error',                                                                   // 在块之前使用一致的空格
    'space-in-parens': 'error',                                                                       // 在圆括号内使用一致的空格
    'space-infix-ops': ['error', { int32Hint: true }],                                                // 操作符周围有空格
    'object-curly-spacing': ['error', 'always'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],                                        // 禁止出现多个空格(在行尾出现注释之前忽略多个空格)
    quotes: ['error', 'single', { allowTemplateLiterals: true }],                                     // 统一使用单引号和反勾号
    'space-before-function-paren': [0, 'always'],                                                     // 函数的关键字之后需要一个空格
    'no-debugger': 'error'                                                                            // 禁止出现debugger
  }
}
