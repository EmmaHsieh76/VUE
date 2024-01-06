<template lang="pug">
#park
  img(src="@/assets/park0302.jpg")
  p {{ route.path  }}
  input(type="button" value="回首頁" @click="goHome")
  input(type="button" value="上一頁" @click="goPrev")
</template>

<script setup>
// useRoute  => 取得目前的路由資訊
// useRouter => 處理路由操作 ex.換頁

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goHome = () => {
  router.go(-1)
}

const goPrev =()=>{
  // router.push(路徑)
  // router.push(指定路由名稱)
  router.push({name:'home'})
}
</script>
