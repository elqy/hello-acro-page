<template>
  <VCharts
    v-if="renderChart"
    :option="options"
    :autoresize="autoResize"
    :style="{ width, height }"
  />
</template>

<script lang="ts" setup>
  // ref这个新方法，可以将数据变成响应式数据
  // nextTick 是将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它
  import { ref, nextTick } from 'vue';
  // 引入echarts图表
  import VCharts from 'vue-echarts';
  // import { useAppStore } from '@/store';

  defineProps({
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
  });
  // const appStore = useAppStore();
  // const theme = computed(() => {
  //   if (appStore.theme === 'dark') return 'dark';
  //   return '';
  // });
  // 定义是否重新绘制图表
  const renderChart = ref(false);
  // wait container expand
  nextTick(() => {
    renderChart.value = true;
  });
</script>

<style scoped lang="less"></style>
