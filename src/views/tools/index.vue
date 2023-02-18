<template>
  <div class="container">
    <Breadcrumb :items="['menu.tools', 'menu.tools.dev']" />
    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card class="general-card" :title="$t('menu.tool.cardList')">
          <a-row justify="space-between">
            <a-col :span="24">
              <a-tabs :default-active-tab="1" type="rounded">
                <a-tab-pane key="1" :title="$t('tool.tab.title.all')">
                  <ToolCard :type="typeWeb" />
                  <a-divider />
                  <ToolCard :type="typeJava" />
                  <a-divider />
                  <ToolCard :type="typePython" />
                  <a-divider />
                  <ToolCard :type="typeDataV" />
                  <a-divider />
                  <ToolCard :type="typeGo" />
                </a-tab-pane>
                <a-tab-pane key="2" :title="$t('tool.tab.title.web')">
                  <ToolCard :type="typeWeb" />
                </a-tab-pane>
                <a-tab-pane key="3" :title="$t('tool.tab.title.java')">
                  <ToolCard :type="typeJava" />
                </a-tab-pane>
                <a-tab-pane key="4" :title="$t('tool.tab.title.datav')">
                  <ToolCard :type="typeDataV" />
                </a-tab-pane>
                <a-tab-pane key="5" :title="$t('tool.tab.title.go')">
                  <ToolCard :type="typeGo" />
                </a-tab-pane>
                <a-tab-pane key="6" :title="$t('tool.tab.title.python')">
                  <ToolCard :type="typePython" />
                </a-tab-pane>
                <a-tab-pane key="7" :title="$t('tool.tab.title.other')">
                  <ToolCard :type="typeOther" />
                </a-tab-pane>
              </a-tabs>
            </a-col>
            <a-input-search
              :placeholder="$t('cardList.searchInput.placeholder')"
              style="position: absolute; top: 60px; right: 20px; width: 240px"
            />
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { queryToolsList, ToolsListRes, ToolsParams } from '@/api/tools';
  import useLoading from '@/hooks/loading';
  import ToolCard from './components/tool-card.vue';

  type TypeProps = 'Web' | 'Java' | 'Python' | 'Go' | 'DataV' | 'Other';

  const typeWeb = ref<TypeProps>('Web');
  const typeJava = ref<TypeProps>('Java');
  const typePython = ref<TypeProps>('Python');
  const typeDataV = ref<TypeProps>('DataV');
  const typeGo = ref<TypeProps>('Go');
  const typeOther = ref<TypeProps>('Other');

  const { setLoading } = useLoading(true);
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
</script>

<script lang="ts">
  export default {
    name: 'Tools',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px;

    :deep(.arco-list-content) {
      overflow-x: hidden;
    }

    :deep(.arco-card-meta-title) {
      font-size: 14px;
    }
  }

  :deep(.arco-list-col) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  :deep(.arco-list-item) {
    width: 33%;
  }

  :deep(.block-title) {
    margin: 0 0 12px;
    font-size: 14px;
  }

  :deep(.list-wrap) {
    // min-height: 140px;
    .list-row {
      align-items: stretch;

      .list-col {
        margin-bottom: 16px;
      }
    }

    :deep(.arco-space) {
      width: 100%;

      .arco-space-item {
        &:last-child {
          flex: 1;
        }
      }
    }
  }
</style>
