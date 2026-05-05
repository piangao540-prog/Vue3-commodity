import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartApi } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore = useCartStore()
    // action函数
    const getUserInfo = async (account: string, password: string) => {
        const res = await loginApi(account, password)
        userInfo.value = res.data.result
        await mergeCartApi(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartStore.updateNewList()
    }


    // 退出时清理用户数据
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearnCart()
    }

    return { userInfo, getUserInfo, clearUserInfo }
}, { persist: true })