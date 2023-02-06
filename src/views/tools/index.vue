<template>
  <div class="grid-demo-background">
    <a-space direction="vertical" :size="16" style="display: block">
      <a-row class="grid-demo">
        <a-col :span="24"> Web前段开发工具 </a-col>
      </a-row>
      <a-row class="grid-demo">
        <a-col v-for="(item, index) in toolsData.list" :key="index" :span="6">
          <div>
            <a-link :href="item.href" :target="item.target"
              >{{ item.title }}
            </a-link>
          </div>
        </a-col>
      </a-row>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import {
    queryToolsList,
    ToolsListRes,
    ToolsParams,
    ToolsRecord,
  } from '@/api/tools';
  import useLoading from '@/hooks/loading';

  const { loading, setLoading } = useLoading(true);
  const renderData = ref<ToolsRecord[]>([]);
  const toolsData = ref<ToolsListRes>({ list: [], total: 1 });
  const fetchData = async (
    params: ToolsParams = { current: 1, pageSize: 20 }
  ) => {
    setLoading(true);
    try {
      const { data } = await queryToolsList(params);
      toolsData.value = JSON.parse(JSON.stringify(data));
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();
  onMounted(() => {});
</script>

<script lang="ts">
  export default {
    name: 'Tools',
  };
</script>

<style scoped>
  .grid-demo-background {
    background-image: linear-gradient(
      90deg,
      var(--color-fill-2) 4.16666667%,
      transparent 4.16666667%,
      transparent 8.33333333%,
      var(--color-fill-2) 8.33333333%,
      var(--color-fill-2) 12.5%,
      transparent 12.5%,
      transparent 16.66666667%,
      var(--color-fill-2) 16.66666667%,
      var(--color-fill-2) 20.83333333%,
      transparent 20.83333333%,
      transparent 25%,
      var(--color-fill-2) 25%,
      var(--color-fill-2) 29.16666667%,
      transparent 29.16666667%,
      transparent 33.33333333%,
      var(--color-fill-2) 33.33333333%,
      var(--color-fill-2) 37.5%,
      transparent 37.5%,
      transparent 41.66666667%,
      var(--color-fill-2) 41.66666667%,
      var(--color-fill-2) 45.83333333%,
      transparent 45.83333333%,
      transparent 50%,
      var(--color-fill-2) 50%,
      var(--color-fill-2) 54.16666667%,
      transparent 54.16666667%,
      transparent 58.33333333%,
      var(--color-fill-2) 58.33333333%,
      var(--color-fill-2) 62.5%,
      transparent 62.5%,
      transparent 66.66666667%,
      var(--color-fill-2) 66.66666667%,
      var(--color-fill-2) 70.83333333%,
      transparent 70.83333333%,
      transparent 75%,
      var(--color-fill-2) 75%,
      var(--color-fill-2) 79.16666667%,
      transparent 79.16666667%,
      transparent 83.33333333%,
      var(--color-fill-2) 83.33333333%,
      var(--color-fill-2) 87.5%,
      transparent 87.5%,
      transparent 91.66666667%,
      var(--color-fill-2) 91.66666667%,
      var(--color-fill-2) 95.83333333%,
      transparent 95.83333333%
    );
  }

  .grid-demo .arco-col {
    height: 48px;
    color: var(--color-white);
    line-height: 48px;
    text-align: center;
  }

  .grid-demo .arco-col:nth-child(2n) {
    background-color: rgb(var(--arcoblue-6) 0.9);
  }

  .grid-demo .arco-col:nth-child(2n + 1) {
    background-color: var(--color-primary-light-4);
  }
</style>
