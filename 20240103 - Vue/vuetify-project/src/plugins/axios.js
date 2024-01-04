import axios from 'axios'

export const api = axios.create({
  // baseURL 可以把前半段網址重複處寫一次就好
  baseURL: import.meta.env.VITE_API
})
