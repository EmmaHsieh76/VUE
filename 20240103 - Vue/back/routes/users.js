import { Router } from 'express'
import { create, login } from '../controllers/users.js'
import * as auth from '../middlewares/auth.js'

const router = Router()
// 註冊
router.post('/', create)
// 登入
router.post('/login', auth.login, login)

export default router
