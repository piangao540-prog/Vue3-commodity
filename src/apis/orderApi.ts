import httpInstance from "@/utils/https";
export const createOrderApi = (data: object) => {
    return httpInstance({
        url: '/member/order',
        method: 'POST',
        data
    })
}