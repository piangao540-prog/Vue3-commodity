import httpInstance from "@/utils/https";

export function getCategroyAPI(id: string) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}