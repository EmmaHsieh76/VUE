// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/front/HomeView.vue'),
        meta: {
          title: '購物網',
          // 是否為登陸狀態，FALSE =>登陸後不能看
          login: false,
          // 是否為管理員，若是TURE，不是管理員也可以看
          admin: false
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/front/RegisterView.vue'),
        meta: {
          title: '購物網 | 註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/front/LoginView.vue'),
        meta: {
          title: '購物網 | 登入',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import('@/views/admin/HomeView.vue'),
        meta: {
          title: '購物網 | 管理',
          login: true,
          admin: true
        }
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// 進到每頁進行一個function，把瀏覽器的標題改掉
router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()

  if (from === START_LOCATION) {
    await user.getProfile()
  }
  // 如果使用者登入，要去註冊或是登入畫面
  if (user.isLogin && ['/register', '/login'].includes(to.path)) {
  // 重新導向根目錄('/')
    next('/')
  // 如果要去的頁面要登入，但是沒登入，重新導向回登入頁
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
  // 如果要去的頁面要管理員，但是不是管理員，重新導向回首頁
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
  // 不重新導向
    next()
  }
})

export default router
