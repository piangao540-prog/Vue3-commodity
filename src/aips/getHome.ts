import httpInstance from "@/utils/https";

export const getBanner = () => {
    return httpInstance.get('/home/banner')
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}