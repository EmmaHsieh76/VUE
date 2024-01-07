<template lang="pug">
VApp 
  VAppBar
    VContainer.d-flex.align-center
      VAppBarTitle TEXT
      VBtn(prepend-icon="mdi-home" to="/") 首頁
      VBtn(prepend-icon="mdi-information" to="/about") 關於
  VMain
    RouterView
</template>

<script setup>
</script>
