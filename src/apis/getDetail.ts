import httpInstance from "@/utils/https";

export const getDetail = (id: string) => {
    return httpInstance.get('/goods', {
        params: { id }
    })
}