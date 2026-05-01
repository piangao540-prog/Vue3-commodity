import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import home from '@/views/Home/index.vue'
import categoy from '@/views/Category/index.vue'
import subcategroy from '@/views/SubCategroy/index.vue'



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
        component: categoy
      },
      {
        path: 'category/sud/:id',
        name: 'subcategory',
        component: subcategroy
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
})

export default router
