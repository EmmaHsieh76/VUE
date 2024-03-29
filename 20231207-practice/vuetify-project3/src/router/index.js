/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: '/about',
    component: () => import("@/views/AboutView.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
}
)

export default router;
