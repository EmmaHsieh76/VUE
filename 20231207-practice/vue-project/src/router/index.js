import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // 定義路徑顯示什麼路徑名字跟元件
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '國家公園介紹網'
      }
    },
    {
      path: '/yangmingshan',
      name: 'yangmingshan',
      component: () => import('@/views/YangmingshanView.vue'),
      meta: {
        title: '國家公園介紹網 | 陽明山'
      }
    },
    {
      path: '/sheipa',
      name: 'sheipa'
    }
  ]
})
// 進入每一頁前執行
// to = 目標頁面
// from = 來源頁面
// next = 重新導向
router.beforeEach((to, from, next) => {
  if (to.name === 'sheipa') {
    // 如果目標頁是 sheipa
    // 重新導向回首頁
    next('/')
  } else {
    // 該去哪就去哪
    next()
  }
})
// 進入每一頁後執行
// to = 目標頁面
// from = 來源頁面
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
