import { defineStore } from 'pinia';
import { Notification } from '@arco-design/web-vue';
import type { NotificationReturn } from '@arco-design/web-vue/es/notification/interface';
import type { RouteRecordNormalized } from 'vue-router';
import defaultSettings from '@/config/settings.json';
import { getMenuList } from '@/api/user';
import { AppState } from './types';

/**
 * 使用pinia进行应用程序的状态管理
 */
const useAppStore = defineStore('app', {
  // 读取settings.json 中的设置 定义了应用程序的全局设置
  state: (): AppState => ({ ...defaultSettings }),

  getters: {
    // 获取应用程序当前设置
    appCurrentSetting(state: AppState): AppState {
      return { ...state };
    },
    // 获取应用程序设备信息
    appDevice(state: AppState) {
      return state.device;
    },
    // 获取应用程序异步菜单
    appAsyncMenus(state: AppState): RouteRecordNormalized[] {
      return state.serverMenu as unknown as RouteRecordNormalized[];
    },
  },

  actions: {
    // 更新应用程序的设置
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial);
    },

    // 改变主题颜色
    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark';
        document.body.setAttribute('arco-theme', 'dark');
      } else {
        this.theme = 'light';
        document.body.removeAttribute('arco-theme');
      }
    },
    // 切换设备类型
    toggleDevice(device: string) {
      this.device = device;
    },
    // 切换菜单隐藏
    toggleMenu(value: boolean) {
      this.hideMenu = value;
    },
    // 匹配服务器菜单配置
    async fetchServerMenuConfig() {
      let notifyInstance: NotificationReturn | null = null;
      try {
        notifyInstance = Notification.info({
          id: 'menuNotice', // Keep the instance id the same
          content: 'loading',
          closable: true,
        });
        // 调用获取菜单列表
        const { data } = await getMenuList();
        this.serverMenu = data;
        notifyInstance = Notification.success({
          id: 'menuNotice',
          content: 'success',
          closable: true,
        });
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        notifyInstance = Notification.error({
          id: 'menuNotice',
          content: 'error',
          closable: true,
        });
      }
    },
    // 清空服务器菜单项
    clearServerMenu() {
      this.serverMenu = [];
    },
  },
});

export default useAppStore;
