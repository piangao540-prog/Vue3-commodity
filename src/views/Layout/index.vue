<template>
    <LayoutNav />
    <LayoutHeader/>
    <LayoutFixed />
    <RouterView/>
    <LayoutFooter/>

</template>

<script setup>
import LayoutFooter from './compontents/LayoutFooter.vue';
import LayoutHeader from './compontents/LayoutHeader.vue';
import LayoutNav from './compontents/LayoutNav.vue';
import LayoutFixed from './compontents/LayoutFixed.vue';
import { onMounted } from 'vue';


// 获取数据
import { usecategroyStore } from '@/stores/categroy';
const categoryStore = usecategroyStore();
onMounted(()=>{
  categoryStore.getHeaderNav()
})
</script>





<style scoped lang="scss"></style>