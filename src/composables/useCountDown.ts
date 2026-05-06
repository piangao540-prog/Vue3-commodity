// 封装倒计时函数
import { computed, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'
export const useCountDown = () => {
    const time = ref(0)
    let timer = null
    // 格式化时间
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    const start = (currentTime: number) => {
        time.value = currentTime
        setInterval(() => {
            time.value--
        }, 1000)
        // 组件销毁时清除计时器
        onUnmounted(() => {
            timer && clearInterval(timer)
        })
    }
    return { formatTime, start }
}