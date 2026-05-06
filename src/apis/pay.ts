import httpInstance from "@/utils/https"

export const getOrderApi = (id: number) => {
    return httpInstance({
        url: `/member/order/${id}`
    })
}