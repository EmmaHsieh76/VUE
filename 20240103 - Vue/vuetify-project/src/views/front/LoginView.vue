<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1 登入
    VDivider
    VCol(cols="12")
      //- 當表單正在送出時停用表單，提交後不能再提交
      VForm(:disabled="isSubmitting" @submit.prevent="submit")
        VTextField(
          label="帳號"
          minlength="4" maxlength="20" counter
          v-model="account.value.value"
          :error-messages="account.errorMessage.value"
        )
        VTextField(
          label="密碼" type="password"
          minlength="4" maxlength="20" counter
          v-model="password.value.value"
          :error-messages="password.errorMessage.value"
        )
        VBtn(type="submit" color="green") 登入
</template>

<script setup>
// vue的表單驗證
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
// useRoute=>目前這頁，useRouter是跳頁處理
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'

const router = useRouter()
const createSnackbar = useSnackbar()

// 定義註冊表單的資料格式
const schema = yup.object({
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符'),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符')
})

// useForm建立表單
// 表單送出可以執行，是否表單在送出中(可將表單停用)
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    createSnackbar({
      text: '登入成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})
</script>
