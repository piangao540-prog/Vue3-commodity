import type { App } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export const layzPlugin = {
    install(app: App) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(
                    el,
                    ([entry]) => {
                        if (entry?.isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}