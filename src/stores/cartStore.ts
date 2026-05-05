import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

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

    const addCart = (goods: CartItem) => {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            item.count++
        } else {
            cartList.value.push(goods)
        }
    }

    const delCart = (skuId: string) => {
        const index = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(index)
    }
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * (c.price ?? 0), 0))

    const singleCheck = (skuId: string, selected: boolean) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        if (item) {
            item.selected = selected
        }
    }

    return { cartList, addCart, delCart, allCount, allPrice, singleCheck }
}, { persist: true })