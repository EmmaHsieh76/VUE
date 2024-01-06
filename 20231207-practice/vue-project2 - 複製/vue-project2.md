
# npm create vue
√ Project name: ... vue-project2
√ Add TypeScript? ... No 
√ Add JSX Support? ... No 
√ Add Vue Router for Single Page Application development? ... Yes
√ Add Pinia for state management? ... No 
√ Add Vitest for Unit Testing? ... No / Yes
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... Yes
√ Add Prettier for code formatting? ... No 

# npm i -D @vue/eslint-config-standard pug sass
# npm i -D eslint-plugin-vue-pug
功能:寫script setup時，會去做pug的解析

# 修改 .eslintrc.cjs 
## 原本
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
----------------
## 修改後
  'extends': [
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended',
    'eslint:recommended'
    '@vue/standard',
  ],

# 安裝套件 npm i -D @vue/language-plugin-pug
用途:在vue的語法使用時有顏色顯示
安裝 npm i -D @vue/language-plugin-pug 後 
1. 在 vue-project 資料夾內新增檔案 jsconfig.json 
2. 在 jsconfig.json 檔案內貼上以下程式碼
{
"vueCompilerOptions": {
"plugins": [
"@vue/language-plugin-pug"
]
}
}


