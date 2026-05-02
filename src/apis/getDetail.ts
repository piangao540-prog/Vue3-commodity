import httpInstance from "@/utils/https";

export const getDetail = (id: string) => {
    return httpInstance.get('/goods', {
        params: { id }
    })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const fetchHotGoodsAPI = ({ id, type, limit = 3 }: { id: string; type: 1 | 2; limit?: number }) => {
    return httpInstance({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}