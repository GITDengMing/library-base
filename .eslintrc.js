module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  extends: ['plugin:@typescript-eslint/recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'], // 定义了该eslint文件所依赖的插件
  rules: {
    'no-unused-vars': 'off'
  }
}
