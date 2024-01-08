# 安裝在 back 資料夾

npm init --yes
npm i express mongoose dotenv validator passport passport-jwt passport-local bcrypt cors multer multer-storage-cloudinary http-status-codes
npm i -D eslint nodemon
npx eslint --init
√ How would you like to use ESLint? · style  
√ What type of modules does your project use? · esm
√ Where does your code run? · node
√ How would you like to define a style for your pronit @eslint/config'.ject? · guide
√ Which style guide do you want to follow? · standard
√ What format do you want your config file to be in? · JSON
√ Would you like to install them now? . Yes  
√ Which package manager do you want to use? · npm

package.json 補上
"type": "module",
"dev": "nodemon index.js"

開.env
複製 db 的網址貼在.env 裡面後面加上日期
ex.
DB_URL=mongodb+srv://user:vLuji755aJW1w6zM@cluster0.97sjnj9.mongodb.net/20240103
JWT_SECRET=20240103

-----------------------

# 安裝在最外層不要裝在 back 資料夾

npm create vuetify
√ Project name: ... vuetify-project
√ Which preset would you like to install? » Custom (Choose your features)
√ Use TypeScript? ... No
√ Use Vue Router? ... Yes
√ Use Pinia? ... Yes
√ Use ESLint? ... Yes
√ Would you like to install dependencies with yarn, npm, pnpm, or bun? » npm
--------------------

# 安裝在 vuetify-project 資料夾

npm i -D pug sass @vue/eslint-config-standard @vue/language-plugin-pug eslint-plugin-vue-pug

## 修改.eslintrc.js 檔案變下列程式碼

extends: [
'plugin:vue/vue3-essential',
'plugin:vue-pug/vue3-recommended',
'eslint:recommended',
'@vue/standard'
],
rules: {
'vue/max-attributes-per-line': 'off'
}

## 在 jsconfig.json 檔案最下面，新增下列程式碼

"vueCompilerOptions": {
"plugins": [
"@vue/language-plugin-pug"
]
}

## 清空
assets 
components
views
layouts/defaults 的defaults刪除


## vue-icon 
https://pictogrammers.com/library/mdi/ 

npm i yup vee-validate validator
------------------
 yup 資料格式的驗證
 vee-validate  vue的表單驗證工具 可以變成元件的方式去使用
 validator

npm i axios 
npm i vuetify-use-dialog  =>可以跳出小提示的套件


## 安裝 
用途=> 保存 pinia 狀態的套件
npm i pinia-plugin-persistedstate

用途 => 直接在網頁下方看pinia
npm add -D vite-plugin-vue-devtools