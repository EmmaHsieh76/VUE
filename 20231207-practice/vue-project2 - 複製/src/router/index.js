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
      component: HomeView,
      meta: {
        title: '國家公園介紹網'
      }
    },
    {
      // 路徑
      path: '/yangmingshan',
      // 路徑名字
      name: 'yangmingshan',
      // 使用什麼元件
      // 利用function寫，不會在剛進入時就載入，在點擊這頁時才載入，可以讓瀏覽器負擔比較小
      component: () => import('@/views/yangmingshanView.vue'),
      // meta定義這個路徑有什麼資料
      meta: {
        title: '國家公園||陽明山'
      }
    },
    {
      // 路徑
      path: '/sheipa',
      // 路徑名字
      name: 'sheipa',
      // 使用什麼元件
      // 利用function寫，不會在剛進入時就載入，在點擊這頁時才載入，可以讓瀏覽器負擔比較小
      component: () => import('@/views/sheipaView.vue'),
      // meta定義這個路徑有什麼資料
      meta: {
        title: '國家公園||雪霸'
      }
    }
  ]
})
// 當進到不同路徑(頁面)後，執行改標題的動作
// to =>目標頁面
// from =>來源頁面
router.afterEach((to,from) => {
  document.title = to.meta.title
})

export default router
