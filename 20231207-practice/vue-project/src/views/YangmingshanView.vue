<template lang="pug">
h1 陽明山
p {{ $route.path }}
p {{ $route.fullPath }}
input(type="button" value="上一頁" @click="goPrev")
input(type="button" value="回首頁" @click="goHome")
</template>

<script setup>
// { 取目前路由參數(資料),路由處的的動作像是換頁(動作) }
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 取目前路由資訊
const route = useRoute()
// 路由操作
const router = useRouter()

const goPrev = () => {
  // router.go(相對數字)
  //  >0 後幾頁
  //  <0 前幾頁
  router.go(-1)
}

const goHome = () => {
  // router.push(路徑)
  router.push('/')

  // router.push(指定路由名稱)
  // router.push({ name: 'home' })
}
onMounted(() => {
  console.log(route.path)
})
</script>
