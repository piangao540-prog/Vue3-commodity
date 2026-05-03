import type { App } from 'vue'
import XtximageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentPlugin = {
    install(app: App){
        app.component('XtximageView',XtximageView)
        app.component('XtxSku',XtxSku)
    }
}
