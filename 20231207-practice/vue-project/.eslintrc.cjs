/* eslint-env node */
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'plugin:vue-pug/vue3-recommended', 'eslint:recommended', '@vue/standard'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // 把vue的 eslint 規則提醒關掉
  rules: {
    'vue/max-attributes-per-line': 'off'
  }
}
