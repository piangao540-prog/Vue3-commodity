import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { insertCartApi, findNewCartApi, delCartApi } from '@/apis/cart'
import { useUserStore } from './user'

interface CartItem {
    skuId: string
    count: number
    // 其他可能的商品属性
    name?: string
    price?: number
    picture?: string
    selected?: boolean
}

export const useCartStore = defineStore('cart', () => {
    const cartList = ref<CartItem[]>([])
    const userStore = useUserStore()
    const updateNewList = async () => {
        const res = await findNewCartApi()
        cartList.value = res.data.result
    }
    const isLogin = computed(() => Boolean((userStore.userInfo as { token?: string }).token))
    const addCart = async (goods: CartItem) => {
        if (isLogin.value) {
            await insertCartApi({ skuId: goods.skuId, count: goods.count })
            updateNewList()
        } else {
            // 未登录
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                // 找到了
                item.count++
            } else {
                // 没找到
                cartList.value.push(goods)
            }
        }
    }

    const delCart = async (skuId: string) => {
        if (isLogin.value) {
            await delCartApi(Array(skuId))
            updateNewList()
        } else {
            const index = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(index, 1)
        }
    }

    const allCheck = (selected: boolean) => {
        cartList.value.forEach(item => item.selected = selected)
    }

    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * (c.price ?? 0), 0))

    // 已选择的商品相关计算
    const selectedItems = computed(() => cartList.value.filter(item => item.selected))

    const selectedCount = computed(() =>
        selectedItems.value.reduce((sum, item) => sum + item.count, 0)
    )

    const selectedPrice = computed(() =>
        selectedItems.value.reduce((sum, item) => sum + item.count * (item.price ?? 0), 0)
    )

    // 全选
    const isAll = computed(() => {
        if (cartList.value.length === 0) return false
        return cartList.value.every((item) => item.selected)
    })

    const singleCheck = (skuId: string, selected: boolean) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        if (item) {
            item.selected = selected
        }
    }

    return { cartList, addCart, delCart, isAll, allCount, allPrice, selectedCount, selectedPrice, singleCheck, allCheck }
}, { persist: true })