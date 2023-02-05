import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';

// 使用pinia进行状态管理
const pinia = createPinia();

export { useAppStore, useUserStore, useTabBarStore };
export default pinia;
