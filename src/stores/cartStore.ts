import { defineStore } from 'pinia'
import { ref } from 'vue'

interface CartItem {
    skuId: string
    count: number
    // 其他可能的商品属性
    name?: string
    price?: number
    picture?: string
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
    return { cartList, addCart }
})