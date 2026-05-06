import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import home from '@/views/Home/index.vue'
import category from '@/views/Category/index.vue'
import subcategory from '@/views/SubCategroy/index.vue'
import detail from '@/views/Detail/index.vue'
import cartList from '@/views/cartList/index.vue'
import checkout from '@/views/Checkout/index.vue'
import pay from '@/views/Pay/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '',
        name: 'home',
        component: home
      },
      {
        path: 'category/:id',
        name: 'category',
        component: category
      },
      {
        path: 'category/sub/:id',
        name: 'subcategroy',
        component: subcategory
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: detail
      },
      {
        path: 'cartList',
        name: 'cartList',
        component: cartList
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: checkout
      },
      {
        path: 'pay',
        name: 'pay',
        component: pay
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
