import passport from 'passport'
import passportLocal from 'passport-local'
import passportJWT from 'passport-jwt'
import bcrypt from 'bcrypt'
import users from '../models/users.js'

// 允許使用者用過期的jwt來請求
// 做舊換新?

// local的驗證方式，passportLocal.Strategy的策略
passport.use(
  'login',
  new passportLocal.Strategy(
    {
      // 欄位要是account
      usernameField: 'account',
      // 欄位要是password
      passwordField: 'password'
    },
    async (account, password, done) => {
      try {
        // 找帳號
        const user = await users.findOne({ account })
        // 如果沒有使用者
        if (!user) {
          throw new Error('ACCOUNT')
        }
        // 明文密文比較如果不相等
        if (!bcrypt.compareSync(password, user.password)) {
          throw new Error('PASSWORD')
        }
        return done(null, user, null)
      } catch (error) {
        if (error.message === 'ACCOUNT') {
          return done(null, null, { message: '帳號不存在' })
        } else if (error.message === 'PASSWORD') {
          return done(null, null, { message: '密碼錯誤' })
        } else {
          return done(null, null, { message: '未知錯誤' })
        }
      }
    }
  )
)
