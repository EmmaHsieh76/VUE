import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // createWebHistory 跳頁會直接把路徑名字顯示在後面http://localhost:5173/about =>打包完只有一個index.html => 會讓多個分頁找不到網址
  // createWebHashHistory 顯示在#/路徑名稱 http://localhost:5173/#/about 路徑前面加上id讓網頁不跳頁，像錨點的概念 =>打包完只有一個index.html => 才能在同一頁網頁中進行不同內容的切換
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 路徑
      path: '/',
      // 路徑名字
      name: 'home',
      // 使用什麼元件
      component: HomeView
    },
  ]
})

export default router
