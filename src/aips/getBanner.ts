import httpInstance from "@/utils/https";

export const getBanner = () => {
    return httpInstance.get('/home/banner')
}