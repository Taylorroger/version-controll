module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/essential'
    ],
    globals: {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly'
    },
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    plugins: [
      'vue'
    ],
    rules: {
      'vue/max-attributes-per-line': [2, {
        'singleline': 10,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/name-property-casing': ['error', 'PascalCase'],
      'vue/no-v-html': 'off',
      'accessor-pairs': 2,
      'arrow-spacing': [2, {
        'before': true,
        'after': true
      }],
      'block-spacing': [2, 'always'],
      'brace-style': [2, '1tbs', {
        'allowSingleLine': true
      }],
      'camelcase': [0, {
        'properties': 'always'
      }],
      'comma-dangle': [2, 'never'],
      'comma-spacing': [2, {
        'before': false,
        'after': true
      }],
      'comma-style': [2, 'last'],
      'curly': [2, 'multi-line'],
      'dot-location': [2, 'property'],
      'eol-last': 2,
      'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
      'generator-star-spacing': [2, {
        'before': true,
        'after': true
      }],
      'handle-callback-err': [2, '^(err|error)$'],
      'indent': [2, 2, {
        'SwitchCase': 1
      }],
      'jsx-quotes': [2, 'prefer-single'],
      'key-spacing': [2, {
        'beforeColon': false,
        'afterColon': true
      }],
      'keyword-spacing': [2, {
        'before': true,
        'after': true
      }],
      'new-cap': [2, {
        'newIsCap': true,
        'capIsNew': false
      }],
      'new-parens': 2,
      'no-array-constructor': 2,
      'no-caller': 2,
      'no-console': 'off',
      'no-eval': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-extra-parens': [2, 'functions'],
      'no-floating-decimal': 2,
      'no-implied-eval': 2, // 禁止在setTimeout和setInterval传入字符串
      'no-iterator': 2, // 禁止使用__iterator__
      'no-label-var': 2, // 禁止创建与范围内的变量共享名称的标签的不良做法来创建更清晰的代码
      'no-labels': [2, {
        'allowLoop': false,
        'allowSwitch': false
      }], // 禁止在标签在循环中的使用
      'no-unused-vars': [1, {
        'vars': 'all'
      }],
      'no-lone-blocks': 2,
      'no-multi-spaces': 2, // 禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格
      'no-multi-str': 2, // 防止使用多行字符串
      'no-multiple-empty-lines': [2, {
        'max': 1
      }], // 最大空行数量
      'no-new-object': 2, // 禁用new Object
      'no-new-require': 2, // 消除new require表达的使用
      'no-new-wrappers': 2,
      'no-path-concat': 2,
      'no-proto': 2,
      'no-return-assign': [2, 'always'], // 禁止在return 语句后执行赋值操作
      'no-self-compare': 2,
      'no-sequences': 2, // 禁止使用逗号表达式
      'no-shadow-restricted-names': 2,
      'no-spaced-func': 2,
      'no-throw-literal': 2,
      'no-trailing-spaces': 2,
      'no-undef-init': 2,
      'no-unmodified-loop-condition': 2,
      'no-unneeded-ternary': [2, {
        'defaultAssignment': false
      }],
      'no-useless-call': 2,
      'no-useless-computed-key': 2,
      'no-useless-constructor': 2,
      'no-whitespace-before-property': 2,
      'no-with': 2,
      'one-var': [2, {
        'initialized': 'never'
      }],
      'operator-linebreak': [2, 'after', {
        'overrides': {
          '?': 'before',
          ':': 'before'
        }
      }],
      'padded-blocks': [2, 'never'],
      'quotes': [2, 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }],
      'semi': [2, 'always'],
      'semi-spacing': [2, {
        'before': false,
        'after': true
      }],
      'space-before-blocks': [2, 'always'],
      'space-before-function-paren': [2, 'never'],
      'space-in-parens': [2, 'never'],
      'space-infix-ops': 2,
      'space-unary-ops': [2, {
        'words': true,
        'nonwords': false
      }],
      'spaced-comment': [2, 'always', {
        'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }],
      'template-curly-spacing': [2, 'never'],
      'wrap-iife': [2, 'any'],
      'yield-star-spacing': [2, 'both'],
      'yoda': [2, 'never'],
      'prefer-const': 2,
      'no-debugger': 2,
      'object-curly-spacing': [2, 'always', {
        objectsInObjects: false
      }],
      'array-bracket-spacing': [2, 'never']
    }
  }