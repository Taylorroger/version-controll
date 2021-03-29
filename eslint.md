### eslint 团队使用规则
* 项目采用统一的团队eslint规则，在提交代码前必须对代码进行格式化，提交的代码无eslint检查警告和报错，可以设置编辑器自动格式化或者自己手动格式化
* 出特殊情况，比如引入第三方库，否则一律不允许在提交代码中包含eslint单行注释 ```//eslint-disable-next-line``` 和 eslint全文注释 ``` /* eslint-disable */ ```

### eslint团队规则如下
* eslint检查报错分为error和warning， 数字表示为2和1，always表示总是检查， never则表示从不检查
```
'accessor-pairs': 2, // 在定义对象时需同时提供setter和getter, 否则报错

'arrow-spacing': [2, {
    'before': true,
    'after': true
}], // 使用箭头函数时，前后需添加空格

'block-spacing': [2, 'always'], // 在花括号开始后和结束前需要空格\

'brace-style': [2, '1tbs', {
    'allowSingleLine': false
}], // {} 不能再同一行 

'camelcase': [0, {
    'properties': 'always'
}], // 属性名必须采用驼峰命名

'comma-dangle': [2, {
    'arrays': 'always-mutiline',
    'objects: 'always-mutiline',
    'functions': 'always'
}], 

'comma-spacing': [2, {
    'before': false,
    'after': true
}], // ,后需要空格

'comma-style': [2, 'last'], // 在数字项或者对象属性后添加,

'constructor-super': 2, // 继承class时需要调用super

'curly': [2, 'multi-line', 'consistent'], // 代码块需要{}

'dot-location': [2, 'property'],

'eol-last': 2, // 文本末尾强制换行

'eqeqeq': ['error', 'always', { 'null': 'ignore' }], // 使用严格比较 === 或者 !==, 此规则不应用于null

'generator-star-spacing': [2, {
    'before': true,
    'after': true
}], // generator *符号前后需要空格

'handle-callback-err': [2, '^(err|error)$'], // node回调函数中参数名为err或者error

'indent': [2, 2, {
    'SwitchCase': 2
}], // 缩进2个空格 swicthcase缩进2空格

'jsx-quotes': [2, 'prefer-single'], // 对所有不包含单引号的JSX属性值强制使用单引号

'key-spacing': [2, {
    'beforeColon': false,
    'afterColon': true
}], // 对象属性值：前不需要空格，：后需要强制添加空格

'keyword-spacing': [2, {
    'before': true,
    'after': true
}], // 保留关键字前后需要空格

'new-cap': [2, {
    'newIsCap': true,
    'capIsNew': false
}],

'new-parens': 2,

'no-array-constructor': 2, // 禁止使用Array构造数组，但是使用Array构造指定大小的数组则例外

'no-caller': 2, // 不可能使用arguments.caller并arguments.callee

'no-console': 'off',

'no-class-assign': 2, // 禁止修改类声明的变量

'no-cond-assign': 2, // 不允许判断条件不明确赋值运算符

'no-const-assign': 2, // 不允许对const变量赋值

'no-control-regex': 0, // 不允许正则表达式中的控制字符

'no-delete-var': 2, // 不允许在变量上使用

'no-dupe-args': 2, // 不允许在函数声明或表达式中使用重复的参数名称

'no-dupe-class-members': 2, // 标记在级别成员中使用重复名称

'no-dupe-keys': 2, // 不允许在对象文字中使用重复键

'no-duplicate-case': 2, // 不允许在switch语句的case子句中使用重复的测试表达式

'no-empty-character-class': 2, // 不允许在正则表达式中使用空字符类

'no-empty-pattern': 2, // 标记解构结构对象和数组中的任何空模式

'no-eval': 2, // 禁止使用eval方法

'no-ex-assign': 2, // 不允许在catch中对外部变量重新赋值

'no-extend-native': 2, // 不允许直接修改内建对象的原型

'no-extra-bind': 2,
'no-extra-boolean-cast': 2,
'no-extra-parens': [2, 'functions'],
'no-fallthrough': 2,
'no-floating-decimal': 2,
'no-func-assign': 2,
'no-implied-eval': 2,
'no-inner-declarations': [2, 'functions'],
'no-invalid-regexp': 2,
'no-irregular-whitespace': 2,
'no-iterator': 2,
'no-label-var': 2,
'no-labels': [2, {
    'allowLoop': false,
    'allowSwitch': false
}],
'no-lone-blocks': 2,
'no-mixed-spaces-and-tabs': 2,
'no-multi-spaces': 2,
'no-multi-str': 2,
'no-multiple-empty-lines': [2, {
    'max': 1
}],
'no-native-reassign': 2,
'no-negated-in-lhs': 2,
'no-new-object': 2,
'no-new-require': 2,
'no-new-symbol': 2,
'no-new-wrappers': 2,
'no-obj-calls': 2,
'no-octal': 2,
'no-octal-escape': 2,
'no-path-concat': 2,
'no-proto': 2,
'no-redeclare': 2,
'no-regex-spaces': 2,
'no-return-assign': [2, 'except-parens'],
'no-self-assign': 2,
'no-self-compare': 2,
'no-sequences': 2,
'no-shadow-restricted-names': 2,
'no-spaced-func': 2,
'no-sparse-arrays': 2,
'no-this-before-super': 2,
'no-throw-literal': 2,
'no-trailing-spaces': 2,
'no-undef': 2,
'no-undef-init': 2,
'no-unexpected-multiline': 2,
'no-unmodified-loop-condition': 2,
'no-unneeded-ternary': [2, {
    'defaultAssignment': false
}],
'no-unreachable': 2,
'no-unsafe-finally': 2,
'no-unused-vars': [1, {
    'vars': 'all',
    'args': 'none'
}],
'no-useless-call': 2,
'no-useless-computed-key': 2,
'no-useless-constructor': 2,
'no-useless-escape': 0,
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
'use-isnan': 2,
'valid-typeof': 2,
'wrap-iife': [2, 'any'],
'yield-star-spacing': [2, 'both'],
'yoda': [2, 'never'],
'prefer-const': 2,
'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
'object-curly-spacing': [2, 'always', {
    objectsInObjects: false
}],
'array-bracket-spacing': [2, 'never']
```
