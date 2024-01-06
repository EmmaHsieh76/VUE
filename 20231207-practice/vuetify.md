# npm create vuetify 
Project name: ... vuetify-project
√ Which preset would you like to install? » Custom (Choose your features)
√ Use TypeScript? ... No 
√ Use Vue Router? ... Yes
√ Use Pinia? ... Yes
√ Use ESLint? ... Yes
√ Would you like to install dependencies with yarn, npm, pnpm, or bun? » npm


終端機進 vuetify-project 資料夾
# cd vuetify-project


# 安裝 npm i -D pug sass @vue/eslint-config-standard eslint-plugin-vue @vue/language-plugin-pug


# 修改 .eslintrc.js 
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    <!-- 修改這裡 -->
    "plugin:vue/vue3-recommended",
    "plugin:vue-pug/vue3-recommended",
    "eslint:recommended",
    "@vue/standard",
  ],
  <!-- 把vue的 eslint 規則提醒關掉 -->
  <!-- 修改這裡 -->
  rules: {
    "vue/max-attributes-per-line": "off",
  },
};

# 修改 jsconfig.json
{
  "compilerOptions": {
    "allowJs": true,
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": ["src/*"]
    },
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"],
  },
  <!-- 增加下列 -->
  "vueCompilerOptions": {
    "plugins": ["@vue/language-plugin-pug"]
  }
}

# 刪除三個資料夾
assets
components
layouts


# 更改router 裡的 index.js 檔案
 createWebHistory 改成=>createWebHashHistory

