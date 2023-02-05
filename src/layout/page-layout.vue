<template>
  <!-- 路由视图入口 ，传递组件和路由信息-->
  <router-view v-slot="{ Component, route }">
    <!-- 动画效果-->
    <transition name="fade" mode="out-in" appear>
      <!-- 动态组件 判断是否忽略缓存 定义键值为全部路径-->
      <component
        :is="Component"
        v-if="route.meta.ignoreCache"
        :key="route.fullPath"
      />
      <!-- 使用keep-alive包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。-->
      <keep-alive v-else :include="cacheList">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useTabBarStore } from '@/store';

  const tabBarStore = useTabBarStore();

  const cacheList = computed(() => tabBarStore.getCacheList);
</script>

<style scoped lang="less"></style>
