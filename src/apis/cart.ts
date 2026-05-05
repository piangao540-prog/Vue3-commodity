import httpInstance from "@/utils/https";

export const insertCartApi = ({ skuId, count }: { skuId: string; count: number }) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

export const delCartApi = (ids: string[]) => {
    return httpInstance({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

export const findNewCartApi = () => {
    return httpInstance({ url: '/member/cart' })
} 