import httpInstance from "@/utils/https";

export const getCount = () => {
    return httpInstance.get('home/category/head')
}