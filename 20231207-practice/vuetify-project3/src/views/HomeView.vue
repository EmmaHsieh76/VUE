<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1 {{ appStore.number }}
      h1 {{ appStore.square }}
      h1 儲存庫數字 {{number}}
      VBtn(@click="appStore.plus") +
      VBtn(@click="appStore.minus") -
      br
      VBtn(@click="plus") +
      VBtn(@click="minus") -
</template>

<script setup>
import { useAppStore } from "@/store/app";
//使用 storeToRefs 維持states的響應性，function不需要
import { storeToRefs } from "pinia";

const appStore = useAppStore();
// states儲存資料，直接解構會失去響應性
// const { number } = appStore;
// 維持響應性，
const { number } = storeToRefs(appStore);

const {minus,plus} = appStore


</script>
