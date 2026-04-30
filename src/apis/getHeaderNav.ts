import httpInstance from "@/utils/https";

export const getHeaderNavApi = () => {
    return httpInstance.get('home/category/head')
}