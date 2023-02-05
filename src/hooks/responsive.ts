import { onMounted, onBeforeMount, onBeforeUnmount } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { useAppStore } from '@/store';
import { addEventListen, removeEventListen } from '@/utils/event';
// 宽度定义
const WIDTH = 992; // https://arco.design/vue/component/grid#responsivevalue
/**
 * 查询设备宽度
 * 宽度小于992则视为移动设备
 */
function queryDevice() {
  const rect = document.body.getBoundingClientRect();
  return rect.width - 1 < WIDTH;
}

/**
 * 响应式布局
 * @param immediate
 */
export default function useResponsive(immediate?: boolean) {
  const appStore = useAppStore();

  /**
   * 窗口resize
   */
  function resizeHandler() {
    if (!document.hidden) {
      const isMobile = queryDevice();
      // 切换设备类型
      appStore.toggleDevice(isMobile ? 'mobile' : 'desktop');
      appStore.toggleMenu(isMobile);
    }
  }
  // 重新调整事件防抖功能
  // see aslo https://vueuse.org/shared/usedebouncefn/
  const debounceFn = useDebounceFn(resizeHandler, 100);
  /**
   * 挂载时开启
   */
  onMounted(() => {
    if (immediate) debounceFn();
  });
  /**
   * 开启事件监听
   */
  onBeforeMount(() => {
    addEventListen(window, 'resize', debounceFn);
  });
  /**
   * 结束事件监听
   */
  onBeforeUnmount(() => {
    removeEventListen(window, 'resize', debounceFn);
  });
}
