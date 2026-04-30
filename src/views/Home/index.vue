<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <!-- 测试 -->
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <div>
      主题内容
    </div>
  </HomePanel>
    <HomePanel title="人气好物" subTitle="新鲜好吃 人气爆款">
    <div>
      主要内容
    </div>
  </HomePanel>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>