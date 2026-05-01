import { getCategroyAPI } from "@/apis/categroy"
import { useRoute, onBeforeRouteUpdate } from "vue-router"
import { onMounted, ref } from "vue"

export function useCategroy() {
    const category = ref({})
    const route = useRoute()
    const getcategroy = async (id: string = route.params.id as string) => {
        const res = await getCategroyAPI(id)
        category.value = res.data.result
    }

    onBeforeRouteUpdate((to) => {
        getcategroy(to.params.id as string)
    })


    onMounted(() => {
        getcategroy()
    })
    return { category }
}