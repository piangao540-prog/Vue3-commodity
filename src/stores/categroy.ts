import { ref, } from 'vue'
import { defineStore } from 'pinia'
import { getHeaderNavApi } from '@/apis/getHeaderNav';

export const usecategroyStore = defineStore('category', () => {
    // state数据
    const headerNavList = ref([])
    // 获取数据的方法
    const getHeaderNav = () => {
        getHeaderNavApi().then(res => {
            headerNavList.value = res.data.result
        })
    }

    return { headerNavList, getHeaderNav }
})
