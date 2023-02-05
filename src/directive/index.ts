import { App } from 'vue';
import permission from './permission';

export default {
  install(Vue: App) {
    // 注册全局自定义指令 permission
    Vue.directive('permission', permission);
  },
};
