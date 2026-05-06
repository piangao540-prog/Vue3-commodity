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


/*
params: {
    orderState:0,
  page:1,
  pageSize:2
}
*/
  
export const getUserOrderApi = (params: object) => {
    return httpInstance({
        url: '/member/order',
        method: 'GET',
        params
    })
}