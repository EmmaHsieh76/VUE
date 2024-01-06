module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:vue-pug/vue3-recommended",
    "eslint:recommended",
    "@vue/standard"
  ],
  // 把vue的 eslint 規則提醒關掉
  rules: {
    "vue/max-attributes-per-line": "off",
  },
};
