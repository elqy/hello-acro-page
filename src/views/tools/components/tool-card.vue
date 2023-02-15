<template>
  <a-card :bordered="false" :style="{ width: '100%' }">
    <a-card-grid
      v-for="(item, index) in toolsData.list"
      :key="index"
      :hoverable="index % 2 === 0"
      :style="{ width: '25%' }"
    >
      <a-card class="card-demo" :title="item.type" :bordered="true">
        <template #extra>
          <a-link :href="item.href" :target="item.target">打开 </a-link>
        </template>
        <p :style="{ margin: 0 }">
          {{ index + 1 + '.' + item.title }}
        </p>
      </a-card>
    </a-card-grid>
  </a-card>
</template>

<script lang="ts" setup>
  import {
    queryToolsList,
    ToolsListRes,
    ToolsParams,
    ToolsRecord,
  } from '@/api/tools';
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';

  const props = defineProps({
    type: {
      type: String,
      default: '',
    },
  });

  const { loading, setLoading } = useLoading(true);
  const renderData = ref<ToolsRecord[]>([]);
  const toolsData = ref<ToolsListRes>({ list: [], total: 1 });
  const fetchData = async (
    params: ToolsParams = { type: props.type, current: 1, pageSize: 20 }
  ) => {
    setLoading(true);
    try {
      console.log(params);
      const { data } = await queryToolsList(params);
      toolsData.value = JSON.parse(JSON.stringify(data));
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();
</script>

<style scoped></style>
