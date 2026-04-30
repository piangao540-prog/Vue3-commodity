import httpInstance from "@/utils/https";

export function getCategroyAPI(id: number) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}