// Utilities
import { createPinia } from 'pinia'
// 保存token的套件
import Persistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(Persistedstate)

export default pinia
