import { getBanner } from "@/apis/getHome"
import { onMounted, ref } from "vue"

export function useBanner() {
    const bannerList = ref([])

    const getBannerList = async () => {
        const res = await getBanner({ distributionSite: '2' })
        bannerList.value = res.data.result
    }

    onMounted(() => {
        getBannerList()
    })

    return { bannerList }
}