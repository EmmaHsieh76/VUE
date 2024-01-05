# 開啟 vue 的 lifeserver 功能

1. npm create vue
指定資料夾 => cd vue-project
2. npm i
3. npm run dev

# 安裝三種套件 1.@vue/eslint-config-standard 2.pug 3.sass

4. npm i -D @vue/eslint-config-standard pug sass

# 安裝套件 eslint-plugin-vue-pug

在寫 eslint 會解析 plug
5. npm i -D eslint-plugin-vue-pug

# 安裝套件 npm i -D @vue/language-plugin-pug

安裝 npm i -D @vue/language-plugin-pug 後 1.在 vue-project 資料夾內新增檔案 jsconfig.json ， 2.在 jsconfig.json 檔案內貼上以下程式碼
{
"vueCompilerOptions": {
"plugins": [
"@vue/language-plugin-pug"
]
}
}

# 打包

npm run build

# assets 、 components

內容全刪

# 筆記

createWebHistory =>如果從首頁進去不會壞掉，但從其他分頁進瀏覽器時會壞掉
createWebHashHistory =>在同一頁透過錨點找到相對位置

# vuetify

material 風格

# ckeditor

文字編輯器可使用

# Quasar UI 工具


cd .. >回上層
