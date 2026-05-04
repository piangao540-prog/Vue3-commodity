import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const getUserInfo = async (account: string, password: string) => {
        const res = await loginApi(account, password)
        userInfo.value = res.data.result
    }
    const clearUserInfo = () =>{
        userInfo.value = {}
    }
    return { userInfo, getUserInfo, clearUserInfo }
}, { persist: true })