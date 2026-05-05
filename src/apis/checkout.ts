import httpInstance from "@/utils/https";

export const getCheckoutApi = () => {
    return httpInstance({
        url: '/member/order/pre'
    })
}