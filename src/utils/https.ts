import axios from 'axios'
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user';
import router from '@/router';

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 30000
})

// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const userStore = useUserStore()
    const token = (userStore.userInfo as { token?: string }).token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
httpInstance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const userStore = useUserStore()

    let errorMessage = '请求失败'
    if (error.code === 'ECONNABORTED') {
        errorMessage = '请求超时，请检查网络连接'
    } else if (!error.response) {
        errorMessage = '网络错误，请检查网络连接'
    } else {
        errorMessage = error.response?.data?.msg || error.message
    }

    ElMessage({
        type: 'warning',
        message: errorMessage
    })
    if (error.response?.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(error);
});

export default httpInstance