
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



