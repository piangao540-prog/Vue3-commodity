import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi } from '@/apis/user'
import { useCartStore } from './cartStore'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore = useCartStore()
    const getUserInfo = async (account: string, password: string) => {
        const res = await loginApi(account, password)
        userInfo.value = res.data.result
    }
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearnCart()
    }
    return { userInfo, getUserInfo, clearUserInfo }
}, { persist: true })