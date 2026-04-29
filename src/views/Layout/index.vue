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
</script>





<style scoped lang="scss"></style>