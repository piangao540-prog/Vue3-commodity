import httpInstance from "@/utils/https";

export const loginApi = (account: string, password: string) => {
    return httpInstance({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }

    })
}

export const getLikeListApi = ({ limit = 4 }) => {
    return httpInstance({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}